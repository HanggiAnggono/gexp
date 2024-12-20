import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Category } from '@/modules/category/service'
import Image from 'next/image'
import Link from 'next/link'

export function CatalogueList({ categories }: { categories: Category[] }) {
  return (
    <div>
      <div className="hidden tablet:block">
        <Card className="p-2 w-[10rem]">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>

          <div className="flex flex-col">
            {categories.map((category) => (
              <Link key={category.id} href={`/catalogue/${category.slug}`}>
                <Button variant="ghost" className="w-full justify-start">
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </Card>
      </div>

      <div className="tablet:hidden">
        <div
          className="w-auto overflow-x-auto mb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex flex-row w-auto gap-2">
            {categories.map((category) => (
              <div key={category.id}>
                <Link
                  href={`/catalogue/${category.slug}`}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative w-16 h-16 overflow-hidden rounded-full bg-primary">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <div>{category.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
