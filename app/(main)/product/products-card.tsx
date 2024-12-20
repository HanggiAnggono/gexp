import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  products: {
    id: number
    slug: string
    name: string
    imageUrl: string
    price: number
  }[]
  className?: string
}

export function ProductsCard({ products = [], className }: Props) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 my-20">
        <p>No products found</p>
        <Image
          src="/images/empty.png"
          alt="Empty"
          width={300}
          height={300}
          className="rounded-full bg-primary"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
        className
      )}
    >
      {products.map((product) => {
        return (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <Card className="w-full hover:shadow-lg hover:scale-[1.01]">
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
