import { BookItem } from './types'

export default [
  {
    id: '1',
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
    title: 'title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet risus vel ligula maximus dictum. Vestibulum ultrices mauris nec dolor bibendum auctor. Phasellus rutrum, massa quis mollis ullamcorper, tellus dui malesuada tortor, vel porta leo tellus et erat. Vestibulum luctus vulputate risus, vitae porttitor lorem scelerisque venenatis. Duis nunc purus, mollis quis urna sed, gravida dapibus nisi. In id tortor arcu. Aenean semper erat quis eleifend convallis.',
    infoLink: 'http://example.com/info',
    previewLink: 'http://example.com/preview',
    status: 'unread'
  }
] as BookItem[]
