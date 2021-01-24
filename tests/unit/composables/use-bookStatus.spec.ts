import { useBookStatus } from '@/composables/use-bookStatus'
import { BookItem, READ, READING, STOCK, UNREAD } from '@/repositories/book'
const { setStatusAsRead, setStatusAsReading, setStatusAsStock } = useBookStatus()
const book = {
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
  status: UNREAD,
  startDate: undefined,
  endDate: undefined
} as BookItem

describe('@/composables/use-bookStatus', () => {
  describe('setStatusAsRead', () => {
    test('本のステータスを読書完了にする', () => {
      const readBook = setStatusAsRead(book)
      expect(readBook.status).toEqual(READ)
    })
  })
})
