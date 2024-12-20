'use client'

import Link from 'next/link'
import { Button } from './button'
import { Input } from './input'
import { HomeIcon, ShoppingCartIcon } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function TopBar() {
  const router = useRouter()

  return (
    <div className="flex items-center w-full sticky top-0 z-50 bg-background p-4 gap-4 shadow-md">
      <Link href="/" className="hidden tablet:block">
        <Image
          src="/images/ger.png"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full bg-primary"
        />
      </Link>
      <div className="flex flex-grow items-center justify-center gap-4">
        <Link href="/">
          <Button className="rounded-full p-0 h-11 w-11">
            <HomeIcon />
          </Button>
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const search = e.currentTarget.search.value
            router.push(`/?search=${search}`)
          }}
          className="flex items-center gap-2 w-3/4"
        >
          <Input
            placeholder="Search products"
            className="h-12 rounded-full"
            name="search"
          />
        </form>
        <Link href="/cart">
          <Button className="rounded-full p-0 h-11 w-11">
            <ShoppingCartIcon className="mr-0.5" />
          </Button>
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
