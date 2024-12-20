import { getProductBySlug, getProductVariants } from '@/modules/product/service'
import { ProductImageCollection } from './product-image-collection'
import Image from 'next/image'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ ['product-slug']: string }>
}) {
  const { ['product-slug']: slug } = await params
  const product = await getProductBySlug(slug)
  const variants = await getProductVariants(product.id)

  return (
    <div className="pt-24">
      <div className="flex">
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
        <div className="ml-10">
          <h1 className="text-3xl mb-10">{product.name}</h1>
          <h2 className="text-xl mb-4">Variants</h2>
          <div className="grid grid-cols-3 gap-4">
            {variants.map((variant) => (
              <div key={variant.id}>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="variant"
                    id={`${variant.id}`}
                    className="hidden"
                  />
                  <div className="flex flex-col justify-center border-2 rounded-md [input:checked+&]:bg-primary [input:checked+&]:text-primary-foreground">
                    <div className="p-4">
                      <Image
                        src={variant.imageUrl}
                        alt={variant.name}
                        width={100}
                        height={100}
                        objectFit="contain"
                        className="rounded-md"
                      />
                    </div>
                    <div className="p-2">{variant.name}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="ml-10">
          <h2 className="text-xl mb-4">Price</h2>
          <p>${product.price}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-xl mb-4">Description</h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </div>
  )
}
