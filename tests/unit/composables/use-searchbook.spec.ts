import { useSearchBooks } from '@/composables/use-searchBooks'
import { createDummyBooks } from '@/composables/utils'
import flushPromises from 'flush-promises'
const { startIndex, result, loading, q, orderBy, nextPage, isFinished, empty } = useSearchBooks()

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
    const e = {
      target: {
        complete: jest.fn()
      }
    }
    test('repositoryからデータを取得して、result.itemの配列に追加される', async () => {
      result.value = {
        kind: 'value',
        totalItems: 10,
        items: createDummyBooks(4)
      }

      await nextPage(e)

      expect(result.value.items.length).toEqual(8)
    })

    test('startIndexが呼び出す度に+10される', async () => {
      await nextPage(e)
      expect(startIndex.value).toEqual(11)

      await nextPage(e)
      expect(startIndex.value).toEqual(21)
    })
  })

  describe('isFinished', () => {
    test('totalItems > itemsのときはfalse', () => {
      result.value = {
        kind: 'value',
        totalItems: 10,
        items: createDummyBooks(4)
      }
      expect(isFinished.value).toBeFalsy()

      result.value.items = createDummyBooks(9)
      expect(isFinished.value).toBeFalsy()
    })

    test('totalItems = items のときはtrue', () => {
      result.value = {
        kind: 'value',
        totalItems: 10,
        items: createDummyBooks(10)
      }
      expect(isFinished.value).toBeTruthy()
    })

    test('totalItems < itemsのときはtrue', () => {
      result.value = {
        kind: 'value',
        totalItems: 10,
        items: createDummyBooks(11)
      }
      expect(isFinished.value).toBeTruthy()

      result.value.items = createDummyBooks(20)
      expect(isFinished.value).toBeTruthy()
    })
  })

  describe('empty', () => {
    test('totalItemsが0のときだけtrue', () => {
      result.value = {
        kind: 'value',
        totalItems: 10,
        items: createDummyBooks(20)
      }

      expect(empty.value).toBeFalsy()

      result.value.totalItems = 4
      expect(empty.value).toBeFalsy()

      result.value.totalItems = 0
      expect(empty.value).toBeTruthy()

      result.value = null
      expect(empty.value).toBeFalsy()
    })
  })
})
