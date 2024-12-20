import { Card, CardContent } from '@/components/ui/card'
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
}

export function ProductsCard({ products = [] }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        return (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <Card className="w-full">
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
