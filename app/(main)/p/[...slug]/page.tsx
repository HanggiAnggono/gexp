import { CatalogueList } from '@/app/catalogue-list'
import { getCategories, getCategoryBySlug } from '@/modules/category/service'
import { getProductsByCategoryId } from '@/modules/product/service'
import { ProductsCard } from '../../product/products-card'

export default async function Page({ params }: any) {
  const { slug: slugs = [] } = await params
  const slug = slugs[slugs.length - 1]
  const categories = await getCategories()
  const category = await getCategoryBySlug(slug)

  const products = await getProductsByCategoryId(category.id)

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="ml-5">
        <CatalogueList categories={categories} active={slug} />
      </div>
      <div className="flex-1 px-4">
        <h1 className="text-xl mb-4">{category.name}</h1>
        <ProductsCard products={products} />
      </div>
    </div>
  )
}
