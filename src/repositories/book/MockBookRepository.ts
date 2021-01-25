import { BookItem, BookRepositoryInterface, Params } from './types'
import items from './dummyBooks'

export class MockBookRepository implements BookRepositoryInterface {
  async find (_: Params) {
    return Promise.resolve({
      kind: 'books#volumes',
      totalItems: items.length,
      items
    })
  }

  regist (book: BookItem) {
    return Promise.resolve(book)
  }
}
