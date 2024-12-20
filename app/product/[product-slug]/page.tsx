import {
  getProductBySlug,
  getProducts,
  getProductVariants,
} from '@/modules/product/service'
import { ProductImageCollection } from './product-image-collection'
import { Button } from '@/components/ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import { QuantityInput } from '@/components/ui/quantity-input'
import { ProductReviews } from './product-reviews'
import { ProductsCard } from '../products-card'
import { ProductVariantGrid } from './product-variant-grid'
import { ProductBreadcrumb } from './product-breadcrumb'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ ['product-slug']: string }>
}) {
  const { ['product-slug']: slug } = await params
  const product = await getProductBySlug(slug)
  const variants = await getProductVariants(product.id)

  const otherProducts = await (
    await getProducts()
  ).filter((p) => p.id !== product.id)

  return (
    <div>
      <ProductBreadcrumb
        containerClassName="mb-4"
        items={[{ name: product.name, href: `/product/${product.slug}` }]}
      />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="tablet:w-2/3">
          <div className="flex flex-col desktop:flex-row">
            <div className="w-full desktop:w-1/2">
              <ProductImageCollection
                images={[
                  product.imageUrl,
                  `https://picsum.photos/140/140?random=${Math.random()}`,
                  `https://picsum.photos/140/140?random=${Math.random()}`,
                  `https://picsum.photos/140/140?random=${Math.random()}`,
                  `https://picsum.photos/140/140?random=${Math.random()}`,
                  `https://picsum.photos/140/140?random=${Math.random()}`,
                  `https://picsum.photos/140/140?random=${Math.random()}`,
                ]}
              />
            </div>
            <div className="px-4 tablet:px-10 flex-grow">
              <h1 className="text-3xl mb-10">{product.name}</h1>
              <h2 className="text-xl mb-4">Variants</h2>
              <ProductVariantGrid variants={variants} />
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className="w-full px-4 fixed bottom-0 z-50 bg-background tablet:static tablet:bottom-[unset] tablet:z-[unset] tablet:bg-none tablet:w-1/3 tablet:top-42 tablet:shadow-none">
          {/* Price */}
          <div className="flex flex-col items-end md:items-start static md:fixed py-4">
            <h2 className="hidden md:block text-xl mb-4">Price</h2>
            <div className="text-4xl">${product.price}</div>
            <div className="flex flex-row md:flex-col items-center justify-between gap-4 ">
              <QuantityInput className="mt-4" />
              <Button className="mt-4 p-6 text-xl w-full">
                <ShoppingCartIcon className="mb-1 !size-5" />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="tablet:w-2/3 px-4">
        {/* Description */}
        <div className="mt-10">
          <h2 className="text-xl mb-4">Description</h2>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>

        {/* Product Reviews */}
        <div className="mt-10">
          <ProductReviews productId={product.id} />
        </div>

        {/* Other products */}
        <div className="mt-10">
          <h2 className="text-xl mb-4">Other products</h2>

          <ProductsCard
            products={otherProducts}
            className="md:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </div>
    </div>
  )
}
