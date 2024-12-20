import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Input } from '@/components/ui/input'
import { HomeIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/ui/footer'
import { ThemeProvider } from 'next-themes'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gold & Exp',
  description: 'Gold Experience Requiem',
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex flex-col w-full min-h-screen">
            <TopBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function TopBar() {
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
        <Input
          placeholder="Search products"
          className="w-3/4 h-12 rounded-full"
        />
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
