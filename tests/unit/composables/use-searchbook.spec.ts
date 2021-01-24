import { useSearchBooks } from '@/composables/use-searchBooks'
import flushPromises from 'flush-promises'
const { startIndex, result, loading, q, orderBy } = useSearchBooks()

jest.mock('lodash.debounce', () => (fn: any) => {
  return fn
})

const initialize = () => {
  startIndex.value = 1
  result.value = null
  loading.value = true
  q.value = ''
  orderBy.value = 'relevance'
}

describe('@/composables/use-search-book', () => {
  beforeEach(() => {
    initialize()
  })
  describe('watch params', () => {
    test('qが変更されるとrepositoryからデータを取得する', async () => {
      q.value = 'test'
      await flushPromises()
      expect(result.value).not.toBeNull()
    })

    test('qが空の場合にはデータを取得しない', async () => {
      q.value = ' '
      await flushPromises()
      expect(result.value).toBeNull()
    })

    test('orderByが変更されるとrepositoryからデータを取得する', async () => {
      q.value = 'test'
      await flushPromises()
      result.value = null

      orderBy.value = 'newest'
      await flushPromises()
      expect(result.value).not.toBeNull()
    })
  })
})
