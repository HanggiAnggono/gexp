import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ProductsCard } from './product/products-card'
import { getProducts } from "@/modules/product/service"
import { Suspense } from "react"

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex w-full py-20">
      <div className="ml-5">
        <CatalogueSidebar />
      </div>
      <div className="flex-1 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsCard products={products} />
        </Suspense>
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
