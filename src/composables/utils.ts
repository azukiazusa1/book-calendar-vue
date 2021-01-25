import { BookItem } from '@/repositories/book'

export const dummyLoading = (time = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export const createDummyBook = (id = '1') => {
  return {
    id,
    price: 1000,
    auhtors: ['author1', 'author2'],
    categories: ['category1', 'category2'],
    imageLinks: {
      smallThumbnail: 'https://placehold.jp/150x150.png',
      thumbnail: 'https://placehold.jp/350x240.png'
    },
    pageCount: 300,
    publishedDate: '2020-01-01',
    publisher: 'publisher',
    title: 'title1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet risus vel ligula maximus dictum. Vestibulum ultrices mauris nec dolor bibendum auctor. Phasellus rutrum, massa quis mollis ullamcorper, tellus dui malesuada tortor, vel porta leo tellus et erat. Vestibulum luctus vulputate risus, vitae porttitor lorem scelerisque venenatis. Duis nunc purus, mollis quis urna sed, gravida dapibus nisi. In id tortor arcu. Aenean semper erat quis eleifend convallis.',
    infoLink: 'http://example.com/info',
    previewLink: 'http://example.com/preview',
    status: 'unread',
    startDate: undefined,
    endDate: undefined
  } as BookItem
}

export const createDummyBooks = (num: number) => {
  const dummyBooks: BookItem[] = []
  for (let i = 0; i < num; i++) {
    dummyBooks.push(createDummyBook(String(i)))
  }
  return dummyBooks
}
