import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full flex justify-center p-4 md:p-20 border-t-4 border-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-4">Gold & Exp</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow us on</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="flex gap-2">
                  <InstagramIcon />
                  Instagram
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="flex gap-2">
                  <FacebookIcon />
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="flex gap-2">
                  <TwitterIcon />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/ger.png"
              alt="Logo"
              width={120}
              height={120}
              className="rounded-full mb-4 mx-auto"
            />
            <p className="text-center text-xs text-black">
              &copy; 2024 Gold & Exp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
