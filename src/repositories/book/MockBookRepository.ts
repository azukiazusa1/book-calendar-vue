import { BookRepositoryInterface, Params } from './types'
import items from './dummyBooks'

export class MockBookRepository implements BookRepositoryInterface {
  find (_: Params) {
    return Promise.resolve({
      kind: 'books#volumes',
      totalItems: 581,
      items
    })
  }
}