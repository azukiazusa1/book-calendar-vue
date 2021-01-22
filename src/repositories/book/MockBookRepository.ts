import { BookItem, BookRepositoryInterface, Params } from './types'
import items from './dummyBooks'
import { dummyLoading } from '@/composables/utils'

export class MockBookRepository implements BookRepositoryInterface {
  async find (_: Params) {
    await dummyLoading()
    return Promise.resolve({
      kind: 'books#volumes',
      totalItems: 581,
      items
    })
  }

  regist (book: BookItem) {
    return Promise.resolve(book)
  }
}
