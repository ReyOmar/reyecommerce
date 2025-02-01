import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  // console.log(
  //  crypto.randomUUID().slice(0, 5) +
  //      `>>> Rendered the home page cache with ${products.length} products and ${categories.length} categories`
  // );

  return (
    <div>
      <h1>Hello</h1>
      
      <div>
        <ProductsView products={products}/>
      </div>
    </div>
  );
}
