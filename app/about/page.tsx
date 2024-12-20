import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <div className="py-20">
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold">About</h1>
        <p>
          Gold & Exp is a company that focuses on retailing of clothings,
          offering a wide range of fashionable and comfortable clothing for men
          and women. With a strong commitment to quality and customer
          satisfaction, Gold & Exp has established a strong presence in the
          local market. Our team is dedicated to providing the best possible
          service and support to our customers.
        </p>

        {/* Vision */}
        <h2 className="text-2xl font-bold mt-12">Vision</h2>
        <p>
          Our vision is to become the leading clothing retailer in the region,
          recognized for our commitment to quality, customer satisfaction and
          value.
        </p>

        <h2 className="text-2xl font-bold mt-12">Mission</h2>
        <p>
          Our mission is to provide our customers with the best possible
          service, offering a wide range of fashionable and comfortable clothing
          at competitive prices, while ensuring a high level of quality and
          customer satisfaction.
        </p>
      </section>

      <div className="flex flex-col items-center bg-gradient-to-r from-primary to-purple-500 text-primary-foreground w-full mt-10 p-20">
        <p className="mt-12 text-center w-1/2">
          Are you ready to start shopping? Gold & Exp offers a wide range of
          fashionable and comfortable clothing for men and women. Click the
          button below to view our products.
        </p>
        <div className="mt-6 text-center">
          <Link href="/">
            <Button>View Products</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
