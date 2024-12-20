import { ProductsCard } from './product/products-card'
import { getProducts } from '@/modules/product/service'
import { CatalogueList } from '../catalogue-list'
import { getCategories } from '@/modules/category/service'

export default async function Home() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="ml-5">
        <CatalogueList categories={categories} />
      </div>
      <div className="flex-1 px-4">
        <h1 className="text-xl mb-4">Check out our products</h1>
        <ProductsCard products={products} />
      </div>
    </div>
  )
}
