import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex w-full py-20">
      <div className="ml-5">
        <CatalogueSidebar />
      </div>
      <div className="flex-1 px-4">
        <ProductsCard />
      </div>
    </div>
  )
}

function CatalogueSidebar() {
  return (
    <Card className="p-2 w-[10rem]">
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>

      <div className="flex flex-col">
        {[
          'All',
          'Tops',
          'Dresses',
          'Pants',
          'Skirts',
          'Jackets',
          'Shoes',
          'Accessories',
        ].map((category) => (
          <Link key={category} href={`/catalogue/${category}`}>
            <Button variant="ghost" className="w-full justify-start">
              {category}
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  )
}

function ProductsCard() {
  const products = [
    {
      id: 1,
      name: 'Graphic T-Shirt',
      imageUrl: 'https://picsum.photos/seed/1/200/300',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Minimalist Watch',
      imageUrl: 'https://picsum.photos/seed/2/200/300',
      price: 79.99,
    },
    {
      id: 3,
      name: 'Distressed Denim Jeans',
      imageUrl: 'https://picsum.photos/seed/3/200/300',
      price: 49.99,
    },
    {
      id: 4,
      name: 'Leather Belt',
      imageUrl: 'https://picsum.photos/seed/4/200/300',
      price: 29.99,
    },
    {
      id: 5,
      name: 'Cable-Knit Sweater',
      imageUrl: 'https://picsum.photos/seed/5/200/300',
      price: 39.99,
    },
    {
      id: 6,
      name: 'Slim Fit Shirt',
      imageUrl: 'https://picsum.photos/seed/6/200/300',
      price: 29.99,
    },
    {
      id: 7,
      name: 'Skinny Jeans',
      imageUrl: 'https://picsum.photos/seed/7/200/300',
      price: 39.99,
    },
    {
      id: 8,
      name: 'Tailored Blazer',
      imageUrl: 'https://picsum.photos/seed/8/200/300',
      price: 99.99,
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        return (
          <Card key={product.id} className="w-full">
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
        )
      })}
    </div>
  )
}
