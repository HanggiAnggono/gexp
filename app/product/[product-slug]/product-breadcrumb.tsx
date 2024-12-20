import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Fragment } from 'react'

export function ProductBreadcrumb({
  containerClassName,
  items,
}: {
  containerClassName?: string
  items: Array<{ name: string; href: string }>
}) {
  return (
    <Breadcrumb className={cn('px-2', containerClassName)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.map((item, index) => (
          <Fragment key={index}>
            {index === items.length - 1 ? (
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
