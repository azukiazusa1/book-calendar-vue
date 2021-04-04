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
    title: 'title1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet risus vel ligula maximus dictum. Vestibulum ultrices mauris nec dolor bibendum auctor. Phasellus rutrum, massa quis mollis ullamcorper, tellus dui malesuada tortor, vel porta leo tellus et erat. Vestibulum luctus vulputate risus, vitae porttitor lorem scelerisque venenatis. Duis nunc purus, mollis quis urna sed, gravida dapibus nisi. In id tortor arcu. Aenean semper erat quis eleifend convallis.',
    infoLink: 'http://example.com/info',
    previewLink: 'http://example.com/preview',
    status: 'unread',
    startDate: undefined,
    endDate: undefined,
    comment: undefined
  },
  {
    id: '2',
    price: 2000,
    auhtors: ['author3'],
    categories: ['category3'],
    imageLinks: {
      smallThumbnail: 'https://placehold.jp/150x150.png',
      thumbnail: 'https://placehold.jp/350x240.png'
    },
    pageCount: 150,
    publishedDate: '2020-01-02',
    publisher: 'publisher',
    title: 'title2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet risus vel ligula maximus dictum. Vestibulum ultrices mauris nec dolor bibendum auctor. Phasellus rutrum, massa quis mollis ullamcorper, tellus dui malesuada tortor, vel porta leo tellus et erat. Vestibulum luctus vulputate risus, vitae porttitor lorem scelerisque venenatis. Duis nunc purus, mollis quis urna sed, gravida dapibus nisi. In id tortor arcu. Aenean semper erat quis eleifend convallis.',
    infoLink: 'http://example.com/info',
    previewLink: 'http://example.com/preview',
    status: 'reading',
    startDate: '2020-01-01T00:12:00.000Z',
    endDate: undefined,
    comment: undefined
  },
  {
    id: '3',
    price: 3000,
    auhtors: ['author4', 'author5', 'author5'],
    categories: ['category4'],
    imageLinks: {
      smallThumbnail: null,
      thumbnail: null
    },
    pageCount: 500,
    publishedDate: '2020-01-03',
    publisher: 'publisher',
    title: 'title3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet risus vel ligula maximus dictum. Vestibulum ultrices mauris nec dolor bibendum auctor. Phasellus rutrum, massa quis mollis ullamcorper, tellus dui malesuada tortor, vel porta leo tellus et erat. Vestibulum luctus vulputate risus, vitae porttitor lorem scelerisque venenatis. Duis nunc purus, mollis quis urna sed, gravida dapibus nisi. In id tortor arcu. Aenean semper erat quis eleifend convallis.',
    infoLink: 'http://example.com/info',
    previewLink: 'http://example.com/preview',
    status: 'read',
    startDate: '2020-01-01T00:12:00.000Z',
    endDate: '2020-01-10T00:12:00.000Z',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet risus vel ligula maximus dictum. Vestibulum ultrices mauris nec dolor bibendum auctor. Phasellus rutrum, massa quis mollis ullamcorper, tellus dui malesuada tortor, vel porta leo tellus et erat. Vestibulum luctus vulputate risus, vitae porttitor lorem scelerisque venenatis. Duis nunc purus, mollis quis urna sed, gravida dapibus nisi. In id tortor arcu. Aenean semper erat quis eleifend convallis.'
  },
  {
    id: '4',
    price: 4000,
    auhtors: ['author1', 'author3'],
    categories: ['category1'],
    imageLinks: {
      smallThumbnail: 'https://placehold.jp/150x150.png',
      thumbnail: 'https://placehold.jp/350x240.png'
    },
    pageCount: 500,
    publishedDate: '2020-01-03',
    publisher: 'publisher',
    title: 'title4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet risus vel ligula maximus dictum. Vestibulum ultrices mauris nec dolor bibendum auctor. Phasellus rutrum, massa quis mollis ullamcorper, tellus dui malesuada tortor, vel porta leo tellus et erat. Vestibulum luctus vulputate risus, vitae porttitor lorem scelerisque venenatis. Duis nunc purus, mollis quis urna sed, gravida dapibus nisi. In id tortor arcu. Aenean semper erat quis eleifend convallis.',
    infoLink: null,
    previewLink: null,
    status: 'stock',
    startDate: undefined,
    endDate: undefined,
    comment: undefined
  }
] as BookItem[]
