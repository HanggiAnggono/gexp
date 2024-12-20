export async function getReviewsByProductId(id: string | number) {
  return [
    {
      id: 1,
      productId: id,
      rating: 4,
      comment: 'I really like this product! I\'ve been using it for a while now and it\'s been a great addition to my daily routine. The price is a bit steep, but it\'s worth it for the quality you get.',
      user: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://picsum.photos/seed/1/300/300',
      },
    },
    {
      id: 2,
      productId: id,
      rating: 3,
      comment: 'This product is decent, but it could be better. I was expecting a bit more from it, but it does the job. The price is a bit high, but it\'s not the worst value out there.',
      user: {
        id: 2,
        name: 'Jane Doe',
        imageUrl: 'https://picsum.photos/seed/2/300/300',
      },
    },
    {
      id: 3,
      productId: id,
      rating: 5,
      comment: 'This product is seriously amazing! I was a little skeptical at first, but once I started using it, I was hooked. It is so well made and the features are top notch. I would definitely recommend this product to anyone looking for a similar product.',
      user: {
        id: 3,
        name: 'Bob Smith',
        imageUrl: 'https://picsum.photos/seed/3/300/300',
      },
    },
    {
      id: 4,
      productId: id,
      rating: 4,
      comment: 'I\'ve been using this product for a while now and it\'s been a great experience. The only thing I don\'t like is that it takes a bit of time to get used to the interface. Once you get the hang of it, it\'s easy to use.',
      user: {
        id: 4,
        name: 'David Johnson',
        imageUrl: 'https://picsum.photos/seed/4/300/300',
      },
    },
    {
      id: 5,
      productId: id,
      rating: 3,
      comment: 'This product is alright, nothing special. I mean, it does the job, but it\'s not the best thing I\'ve ever seen. The price is a bit high for what you get.',
      user: {
        id: 5,
        name: 'Sarah Lee',
        imageUrl: 'https://picsum.photos/seed/5/300/300',
      },
    },
    {
      id: 6,
      productId: id,
      rating: 5,
      comment: 'This product is seriously amazing! I was a little skeptical at first, but once I started using it, I was hooked. It is so well made and the features are top notch. I would definitely recommend this product to anyone looking for a similar product.',
      user: {
        id: 6,
        name: 'Michael Brown',
        imageUrl: 'https://picsum.photos/seed/6/300/300',
      },
    },
    {
      id: 7,
      productId: id,
      rating: 4,
      comment: 'I was a bit skeptical about this product at first, but once I started using it, I was impressed. It\'s a great addition to my daily routine and I would definitely recommend it to anyone looking for a similar product.',
      user: {
        id: 7,
        name: 'Emily Taylor',
        imageUrl: 'https://picsum.photos/seed/7/300/300',
      },
    },
    {
      id: 8,
      productId: id,
      rating: 3,
      comment: 'This product is decent, but it could be better. I was expecting a bit more from it, but it does the job. The price is a bit high, but it\'s not the worst value out there.',
      user: {
        id: 8,
        name: 'Kevin White',
        imageUrl: 'https://picsum.photos/seed/8/300/300',
      },
    },
    {
      id: 9,
      productId: id,
      rating: 5,
      comment: 'This product is seriously amazing! I was a little skeptical at first, but once I started using it, I was hooked. It is so well made and the features are top notch. I would definitely recommend this product to anyone looking for a similar product.',
      user: {
        id: 9,
        name: 'Lisa Nguyen',
        imageUrl: 'https://picsum.photos/seed/9/300/300',
      },
    },
  ]
}
