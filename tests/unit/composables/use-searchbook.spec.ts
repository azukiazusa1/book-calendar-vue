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
      // qが空白だとデータを取得してくれないので一旦値を代入する
      q.value = 'test'
      await flushPromises()
      result.value = null

      orderBy.value = 'newest'
      await flushPromises()
      expect(result.value).not.toBeNull()
    })

    test('startIndexの値が変更されてもなにもしない', async () => {
      // qが空白だとデータを取得してくれないので一旦値を代入する
      q.value = 'test'
      await flushPromises()
      result.value = null

      startIndex.value = 10
      await flushPromises()
      expect(result.value).toBeNull()
    })

    test('startIndexの値が1に戻される', async () => {
      startIndex.value = 10
      q.value = 'test'
      await flushPromises()
      expect(startIndex.value).toEqual(1)
    })

    test('loadingの値がfalseになる', async () => {
      q.value = 'test'
      await flushPromises()
      expect(loading.value).toBeFalsy()
    })
  })

  describe('nextPage', () => {
    test('repositoryからデータを取得して、result.itemの配列に追加される', () => {
      result.value = {
        kind: 'value',
        totalItems: '1'
      }
    })
  })
})
