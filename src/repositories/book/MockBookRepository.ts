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

  async findById (id: string) {
    const book = items.find(book => book.id === id)
    if (!book) {
      throw new Error('book not found')
    }
    return Promise.resolve(book)
  }

  regist (book: BookItem) {
    return Promise.resolve(book)
  }

  update (book: BookItem) {
    return Promise.resolve(book)
  }
}
