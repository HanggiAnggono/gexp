export interface Product {
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
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.C0oG-QgU-H2OMROQqBRvSAHaLH&w=200&h=300&c=7',
    price: 19.99,
    description: `
      Casual graphic t-shirt with a relaxed fit. Made from super soft 100% cotton.
      Perfect for everyday wear. The graphic print is a nod to the classic video games of the 80s,
      with a bold colorful design that is sure to turn heads.
      The soft cotton fabric ensures that the t-shirt is comfortable to wear all day long,
      whether you are running errands, playing with the kids, or just lounging around the house.
      The relaxed fit makes it easy to move around in, and the graphic print is a great way to add
      some visual interest to your outfit.
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">Watch the video to see how it looks in action</a>
    `,
  },
  {
    id: 2,
    slug: 'minimalist-watch',
    name: 'Minimalist Watch',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.3Vx_Aa6dk8ZVnLzTABMjpgHaHa&w=200&h=200&c=7',
    price: 79.99,
    description: `
      Sleek and modern minimalist watch with a round face and thin strap.
      Water resistant up to 30 meters. The watch is made from high-quality stainless steel
      and has a scratch-resistant glass face. The minimalist design makes it easy to pair
      with any outfit, and the simple face is easy to read. The watch is also very comfortable
      to wear, with a soft leather strap that is easy to adjust to your wrist size.
      <a href="https://www.instagram.com/p/CWfjKqVj5hH/" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">See how it looks on Instagram</a>
    `,
  },
  {
    id: 3,
    slug: 'distressed-denim-jeans',
    name: 'Distressed Denim Jeans',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.G22r1iYQiSCIEhtyrR7VLQHaLH&w=200&h=300&c=7',
    price: 49.99,
    description: `
      Fashionable distressed denim jeans with ripped knees and frayed hem.
      Made from 100% cotton denim. The distressed look is a great way to add
      some edge to your outfit, and the ripped knees and frayed hem give the
      jeans a laid-back, casual feel. The 100% cotton denim is comfortable
      to wear, and the classic five-pocket design makes them easy to wear
      with any outfit. The distressed look is sure to turn heads, and the jeans
      are a great way to add some visual interest to your outfit.
      <a href="https://www.pexels.com/search/jeans/" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">See how it looks in photos</a>
    `,
  },
  {
    id: 4,
    slug: 'leather-belt',
    name: 'Leather Belt',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.GqwKRxgLVmjC7ew04DwR8wHaHb&w=200&h=200&c=7',
    price: 29.99,
    description: `
      High-quality genuine leather belt with a classic buckle.
      Perfect for dressing up or down. The leather is soft and supple,
      and the classic buckle is easy to adjust to your waist size.
      The belt is a great way to add some finishing touches to your outfit,
      and the high-quality leather ensures that it will last for years
      to come.
      <a href="https://www.leatherworking.org/leather-belt/" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">Learn more about leather belts</a>
    `,
  },
  {
    id: 5,
    slug: 'cable-knit-sweater',
    name: 'Cable-Knit Sweater',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.robWG7arUuMMzYLNoG4dxQHaMJ&w=200&h=328&c=7',
    price: 39.99,
    description: `
      Cozy cable-knit sweater made from soft 100% merino wool.
      Perfect for chilly days. The cable-knit pattern is a classic design
      that is sure to keep you warm and stylish. The soft merino wool is
      comfortable to wear, and the classic fit makes it easy to pair
      with any outfit. The sweater is a great way to add some warmth and
      style to your outfit, and the high-quality merino wool ensures
      that it will last for years to come.
      <a href="https://www.merino.com/why-merino/temperature-regulation/" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">Learn more about merino wool</a>
    `,
  },
  {
    id: 6,
    slug: 'slim-fit-shirt',
    name: 'Slim Fit Shirt',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.6W-9mzgonvS89fxS0MoFZwHaJo&w=200&h=260&c=7',
    price: 29.99,
    description: `
      Slim fit dress shirt with a modern collar and French cuffs.
      Made from 100% cotton. The slim fit design makes it easy to wear
      under a blazer or on its own, and the modern collar and French cuffs
      give it a stylish touch. The 100% cotton fabric is comfortable to wear,
      and the classic design makes it easy to pair with any outfit. The shirt
      is a great way to add some sophistication to your outfit, and the high-quality
      cotton ensures that it will last for years to come.
      <a href="https://www.gq.com/story/how-to-tie-a-tie" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">Learn how to tie a tie</a>
    `,
  },
  {
    id: 7,
    slug: 'skinny-jeans',
    name: 'Skinny Jeans',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.0uI6tSeuRyKWO063rfLu6gHaLI&w=200&h=300&c=7',
    price: 39.99,
    description: `
      Fashionable skinny jeans with a stretchy fit. Made from 100% cotton denim.
      The skinny fit design makes it easy to wear with any outfit, and the stretchy
      fabric ensures that they are comfortable to wear all day long. The 100% cotton
      denim is durable and long-lasting, and the classic five-pocket design makes
      them easy to wear with any outfit. The skinny jeans are a great way to add
      some style to your outfit, and the high-quality denim ensures that they will
      last for years to come.
      <a href="https://www.pexels.com/search/jeans/" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">See how it looks in photos</a>
    `,
  },
  {
    id: 8,
    slug: 'tailored-blazer',
    name: 'Tailored Blazer',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.fMVMBvY6b68GyeWU9eLhIAHaLH&w=200&h=300&c=7',
    price: 99.99,
    description: `
      Classic tailored blazer with a fitted silhouette. Made from 100% wool
      with a luxurious lining. The tailored fit makes it easy to wear with
      any outfit, and the luxurious lining ensures that it is comfortable to
      wear all day long. The 100% wool fabric is durable and long-lasting,
      and the classic design makes it easy to pair with any outfit. The blazer
      is a great way to add some sophistication to your outfit, and the high-quality
      wool ensures that it will last for years to come.
      <a href="https://www.gq.com/story/how-to-tie-a-tie" class="mt-10 text-primary underline" target="_blank" rel="noopener noreferrer">Learn how to tie a tie</a>
    `,
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
