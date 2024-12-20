interface Category {
  id: number
  name: string
  slug: string
  description: string
  imageUrl: string
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Tops',
    slug: 'tops',
    description: 'Tops',
    imageUrl: 'https://picsum.photos/seed/1/300/300',
  },
  {
    id: 2,
    name: 'Dresses',
    slug: 'dresses',
    description: 'Dresses',
    imageUrl: 'https://picsum.photos/seed/2/300/300',
  },
  {
    id: 3,
    name: 'Pants',
    slug: 'pants',
    description: 'Pants',
    imageUrl: 'https://picsum.photos/seed/3/300/300',
  },
  {
    id: 4,
    name: 'Skirts',
    slug: 'skirts',
    description: 'Skirts',
    imageUrl: 'https://picsum.photos/seed/4/300/300',
  },
  {
    id: 5,
    name: 'Jackets',
    slug: 'jackets',
    description: 'Jackets',
    imageUrl: 'https://picsum.photos/seed/5/300/300',
  },
  {
    id: 6,
    name: 'Shoes',
    slug: 'shoes',
    description: 'Shoes',
    imageUrl: 'https://picsum.photos/seed/6/300/300',
  },
  {
    id: 7,
    name: 'Accessories',
    slug: 'accessories',
    description: 'Accessories',
    imageUrl: 'https://picsum.photos/seed/7/300/300',
  },
]

export async function getCategories() {
  return categories
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  return getCategories().then((categories) => {
    return categories.find((category) => category.slug === slug) as Category
  })
}