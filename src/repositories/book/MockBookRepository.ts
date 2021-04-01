import { BookItem, BookRepositoryInterface, Params } from './types'
import { dummyLoading } from '@/composables/utils'
import items from './dummyBooks'

export class MockBookRepository implements BookRepositoryInterface {
  async find (_: Params) {
    await dummyLoading()
    console.log(items)
    return Promise.resolve({
      kind: 'books#volumes',
      totalItems: items.length,
      items
    })
  }

  async findById (id: string) {
    await dummyLoading(100000)
    const book = items.find(book => book.id === id)
    if (!book) {
      throw new Error('book not found')
    }
    return Promise.resolve(book)
  }

  regist (book: BookItem) {
    return Promise.resolve(book)
  }
}
