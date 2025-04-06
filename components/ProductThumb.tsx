import { imageUrl } from '@/lib/imageUrl';
import { Product } from '@/sanity.types';
import Image from 'next/image';
import Link from 'next/link';

function ProductThumb({ product }: { product: Product }) {
    const isOutStock = product.stock != null && product.stock <= 0;

    return (
        <Link 
            href={`/product/${product.slug?.current}`}
            className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${
                isOutStock ? 'opacity-50' : ''
            }`}
            >
                <div className='relative aspect-square w-full h-full overflow-hidden'>
                    {product.image && (
                        <Image 
                            className='object-contain transition-transform duration-300 group-hover:scale-105'
                            src={imageUrl(product.image).url()}
                            alt={product.name || 'Product Image'}
                            fill
                            sizes='(max-with: 768px) 100vw, (max-with: 1200px) 50vw, 33vw'
                        />   
                    )}

                    {isOutStock && (
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                            <span className='text-white text-lg font-bold'>Out of Stock</span>
                        </div>
                    )}
                </div>

                <div className='p-4'>
                    {/* Renderiza la imagen del producto */}
                    <h2 className='text-lg font-semibold text-gray-800 truncate'>
                        {product.name}
                    </h2>
                    {/* Renderiza la descripcion corta */}
                    <p className='mt-2 text-sm text-gray-600 line-clamp-2'>
                        {product.description
                            ?.map((block) => 
                                block._type === 'block'
                                    ? block.children?.map((child) => child.text).join('')
                                    : ''
                            )
                            .join('') || 'No description'}
                    </p>
                    {/* Renderiza el precio del producto - Add the price to the product thumb */}
                    <p className='mt-2 text-lg font-bold text-gray-900'>
                        ${product.price?.toFixed(2)}
                    </p>
                </div>
        </Link>
    );
}

export default ProductThumb;