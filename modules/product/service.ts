interface Product {
  id: number
  slug: string
  name: string
  imageUrl: string
  price: number
  description: string
}

const products: Product[] = [
  {
    id: 1,
    slug: 'graphic-t-shirt',
    name: 'Graphic T-Shirt',
    imageUrl: 'https://picsum.photos/seed/1/300/300',
    price: 19.99,
    description:
      'Casual graphic t-shirt with a relaxed fit. Made from super soft 100% cotton. Perfect for everyday wear.',
  },
  {
    id: 2,
    slug: 'minimalist-watch',
    name: 'Minimalist Watch',
    imageUrl: 'https://picsum.photos/seed/2/300/300',
    price: 79.99,
    description:
      'Sleek and modern minimalist watch with a round face and thin strap. Water resistant up to 30 meters.',
  },
  {
    id: 3,
    slug: 'distressed-denim-jeans',
    name: 'Distressed Denim Jeans',
    imageUrl: 'https://picsum.photos/seed/3/300/300',
    price: 49.99,
    description:
      'Fashionable distressed denim jeans with ripped knees and frayed hem. Made from 100% cotton denim.',
  },
  {
    id: 4,
    slug: 'leather-belt',
    name: 'Leather Belt',
    imageUrl: 'https://picsum.photos/seed/4/300/300',
    price: 29.99,
    description:
      'High-quality genuine leather belt with a classic buckle. Perfect for dressing up or down.',
  },
  {
    id: 5,
    slug: 'cable-knit-sweater',
    name: 'Cable-Knit Sweater',
    imageUrl: 'https://picsum.photos/seed/5/300/300',
    price: 39.99,
    description:
      'Cozy cable-knit sweater made from soft 100% merino wool. Perfect for chilly days.',
  },
  {
    id: 6,
    slug: 'slim-fit-shirt',
    name: 'Slim Fit Shirt',
    imageUrl: 'https://picsum.photos/seed/6/300/300',
    price: 29.99,
    description:
      'Slim fit dress shirt with a modern collar and French cuffs. Made from 100% cotton.',
  },
  {
    id: 7,
    slug: 'skinny-jeans',
    name: 'Skinny Jeans',
    imageUrl: 'https://picsum.photos/seed/7/300/300',
    price: 39.99,
    description:
      'Fashionable skinny jeans with a stretchy fit. Made from 100% cotton denim.',
  },
  {
    id: 8,
    slug: 'tailored-blazer',
    name: 'Tailored Blazer',
    imageUrl: 'https://picsum.photos/seed/8/300/300',
    price: 99.99,
    description:
      'Classic tailored blazer with a fitted silhouette. Made from 100% wool with a luxurious lining.',
  },
]

export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    resolve(products)
  })
}

export function getProductBySlug(slug: string): Promise<Product> {
  return getProducts().then((products) => {
    return products.find((product) => product.slug === slug) as Product
  })
}

export async function getProductVariants(id: number) {
  return [
    {
      id: 1,
      name: 'Black',
      imageUrl: 'https://picsum.photos/seed/1/300/300',
    },
    {
      id: 2,
      name: 'White',
      imageUrl: 'https://picsum.photos/seed/2/300/300',
    },
    {
      id: 3,
      name: 'Blue',
      imageUrl: 'https://picsum.photos/seed/3/300/300',
    },
    {
      id: 4,
      name: 'Grey',
      imageUrl: 'https://picsum.photos/seed/4/300/300',
    },
    {
      id: 5,
      name: 'Red',
      imageUrl: 'https://picsum.photos/seed/5/300/300',
    },
    {
      id: 6,
      name: 'Green',
      imageUrl: 'https://picsum.photos/seed/6/300/300',
    },
    {
      id: 7,
      name: 'Yellow',
      imageUrl: 'https://picsum.photos/seed/7/300/300',
    },
  ]
}
