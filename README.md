# Freemium Ecommerce

Aplicacion de comercio electronico construida con Next.js. El catalogo y el contenido se administran desde Sanity, los usuarios se autentican con Clerk, el carrito se conserva en el navegador con Zustand y los pagos se procesan mediante Stripe Checkout.

## Funcionalidades

- Catalogo de productos ordenado por nombre.
- Vista de detalle con imagen, descripcion, precio, stock y contenido enriquecido.
- Filtrado por categorias y busqueda por nombre.
- Carrito persistente en el navegador: agregar, quitar unidades, ver cantidades y calcular el total.
- Inicio de sesion con Clerk antes de iniciar el pago.
- Checkout alojado por Stripe con codigos promocionales habilitados.
- Pagina de confirmacion que limpia el carrito despues de una compra.
- Consulta de pedidos del usuario autenticado desde Sanity.
- Sanity Studio integrado en `/studio` para administrar productos, categorias, ventas y pedidos.
- Draft Mode y edicion visual de Sanity para previsualizar contenido.

## Stack

- Next.js 15 con App Router y Server Actions.
- React 19 y TypeScript.
- Sanity como CMS y base de datos de contenido.
- Clerk para autenticacion.
- Stripe para Checkout y clientes de pago.
- Zustand con persistencia local para el carrito.
- Tailwind CSS, Radix UI, shadcn/ui y Lucide/Sanity Icons para la interfaz.
- Framer Motion para animaciones disponibles en los componentes.

## Requisitos

- Node.js 20 o superior.
- Una cuenta y proyecto de Sanity.
- Una cuenta de Clerk.
- Una cuenta de Stripe con claves de prueba o produccion.

## Instalacion

1. Instala las dependencias:

  ```bash
  npm install
  ```

2. Crea un archivo `.env.local` en la raiz del proyecto. Usa este listado como referencia:

  ```env
  # URL publica de la aplicacion en desarrollo
  NEXT_PUBLIC_BASE_URL=http://localhost:3000

  # Sanity
  NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
  NEXT_PUBLIC_SANITY_DATASET=production
  NEXT_PUBLIC_SANITY_API_VERSION=2024-12-10
  SANITY_API_TOKEN=tu_token_de_escritura
  SANITY_API_READ_TOKEN=tu_token_de_lectura

  # Stripe
  STRIPE_SECRET_KEY=sk_test_...

  # Clerk
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
  CLERK_SECRET_KEY=sk_test_...
  ```

  Las variables de Clerk son consumidas por `@clerk/nextjs`. En produccion, el checkout tambien usa `VERCEL_URL` cuando la aplicacion esta desplegada en Vercel.

3. Arranca el servidor de desarrollo:

  ```bash
  npm run dev
  ```

4. Abre [http://localhost:3000](http://localhost:3000).

5. Abre [http://localhost:3000/studio](http://localhost:3000/studio) para cargar contenido en Sanity.

## Scripts

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia Next.js con Turbopack. |
| `npm run build` | Genera la compilacion de produccion. |
| `npm run start` | Sirve la compilacion de produccion. |
| `npm run lint` | Ejecuta el linter configurado por Next.js. |
| `npm run typegen` | Extrae el schema de Sanity y regenera `sanity.types.ts`. |

## Como funciona

### Catalogo

La pagina principal (`/`) obtiene productos y categorias mediante consultas GROQ en `sanity/lib/products`. La pagina se sirve de forma estatica y se revalida cada 60 segundos. Las imagenes se transforman con `@sanity/image-url` y se cargan desde `cdn.sanity.io`.

Las rutas principales del catalogo son:

| Ruta | Descripcion |
| --- | --- |
| `/` | Catalogo principal y banner de venta. |
| `/product/[slug]` | Detalle de un producto. |
| `/categories/[slug]` | Productos de una categoria. |
| `/search?query=...` | Busqueda por nombre. |
| `/basket` | Carrito y resumen de compra. |
| `/success` | Confirmacion despues del checkout. |
| `/orders` | Pedidos del usuario autenticado. |
| `/studio` | Sanity Studio integrado. |

### Carrito

`store/store.ts` define el store de Zustand. Cada producto se agrupa por su `_id`; agregar un producto incrementa su cantidad y quitarlo reduce una unidad. El estado se persiste con el nombre `basket-store`, por lo que sobrevive a una recarga del navegador.

El carrito se hidrata en el cliente para evitar discrepancias entre el HTML del servidor y el estado persistido del navegador.

### Autenticacion y compra

Clerk envuelve la aplicacion desde `app/(store)/layout.tsx` y `middleware.ts` aplica el middleware de Clerk a las rutas. El usuario puede explorar y llenar el carrito sin iniciar sesion, pero debe autenticarse para pagar.

Al pulsar `Checkout`, `actions/createCheckoutSession.ts`:

1. Comprueba que todos los productos tengan precio.
2. Busca o crea el cliente correspondiente en Stripe.
3. Genera una sesion de Stripe Checkout con los productos, cantidades y metadatos del usuario.
4. Permite codigos promocionales.
5. Redirige a `/success` si el pago termina correctamente o a `/basket` si se cancela.

La sesion usa `gbp` (libra esterlina) y convierte el precio a la unidad menor de la moneda. La interfaz muestra algunos importes con el simbolo `$`, por lo que conviene alinear la presentacion con la moneda de negocio antes de publicar.

### Pedidos

El esquema de Sanity para `order` contiene numero de orden, referencias de Stripe, usuario de Clerk, cliente, productos, total, moneda, descuento, estado y fecha. La ruta `/orders` exige una sesion de Clerk y consulta los pedidos mediante `getMyOrders`.

Actualmente el repositorio no contiene un webhook de Stripe ni una ruta API que cree documentos `order` despues del pago. Por tanto, para que `/orders` muestre compras reales debe existir un proceso externo o debe implementarse el webhook que valide el evento de Stripe y escriba el pedido en Sanity. La pagina de exito solo limpia el carrito y muestra el numero de orden recibido en la URL.

## Estructura del proyecto

```text
.
├── actions/
│   └── createCheckoutSession.ts  # Server Action para crear sesiones de Stripe
├── app/
│   ├── (store)/                   # Layout y paginas publicas de la tienda
│   │   ├── layout.tsx             # Clerk, Header, Sanity Live y Draft Mode
│   │   ├── page.tsx               # Catalogo principal
│   │   ├── basket/page.tsx        # Carrito y checkout
│   │   ├── categories/[slug]/     # Colecciones por categoria
│   │   ├── orders/page.tsx        # Pedidos del usuario
│   │   ├── product/[slug]/        # Detalle del producto
│   │   ├── search/page.tsx        # Busqueda
│   │   └── success/page.tsx       # Confirmacion de pago
│   ├── draft-mode/                # Activar y desactivar previsualizacion
│   ├── globals.css                # Estilos globales
│   └── studio/                    # Sanity Studio en /studio
├── components/                    # Componentes de tienda y componentes UI
├── lib/
│   ├── imageUrl.ts                # Configuracion de URLs de imagenes Sanity
│   ├── stripe.ts                  # Cliente servidor de Stripe
│   └── utils.ts                   # Utilidades compartidas
├── sanity/
│   ├── schemaTypes/               # Product, Category, Order, Sale y Portable Text
│   ├── lib/products/              # Consultas de catalogo
│   ├── lib/orders/                # Consultas de pedidos
│   ├── lib/sales/                 # Cupones y ventas activas
│   ├── lib/client.ts              # Cliente Sanity para lectura
│   ├── lib/backendClient.ts       # Cliente Sanity con token
│   └── lib/live.ts                # Consultas en tiempo real y preview
├── store/store.ts                 # Store persistido del carrito
├── sanity.config.ts               # Configuracion del Studio
├── sanity.cli.ts                  # Configuracion de la CLI de Sanity
├── next.config.ts                 # Dominios remotos de imagenes
├── middleware.ts                  # Middleware de Clerk
└── package.json                   # Dependencias y scripts
```

## Modelo de contenido en Sanity

- `product`: nombre, slug, imagen, descripcion, precio, categorias y stock.
- `category`: titulo, slug y descripcion.
- `order`: datos del cliente, productos comprados, importes, moneda, estado y fecha.
- `sales`: configuracion de ventas y codigos promocionales.
- `blockContent`: bloques Portable Text usados en las descripciones.

El Studio incluye Structure Tool, Vision para probar consultas GROQ y Presentation Tool para previsualizacion. Despues de modificar los tipos de Sanity, ejecuta `npm run typegen` para actualizar `sanity.types.ts`.

## Despliegue

Para un despliegue en Vercel:

1. Configura todas las variables de `.env.local` en el proyecto de Vercel.
2. Cambia las claves de Stripe y Clerk a las de produccion cuando corresponda.
3. Configura `NEXT_PUBLIC_BASE_URL` para desarrollo y verifica `VERCEL_URL` en el entorno de produccion.
4. Configura las URLs permitidas y los redirects en Clerk.
5. Verifica que el dominio de la aplicacion este autorizado en Sanity y que las imagenes de `cdn.sanity.io` sigan permitidas en `next.config.ts`.
6. Implementa y configura un webhook de Stripe si los pedidos deben guardarse automaticamente en Sanity.

## Estado del proyecto

La base de la tienda esta implementada, incluyendo catalogo, autenticacion, carrito y redireccion al pago. El almacenamiento automatico de pedidos despues de un pago requiere completar la integracion webhook de Stripe descrita arriba.
