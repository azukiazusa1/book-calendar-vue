import { useSearchBooks } from '@/composables/use-searchBooks'
import flushPromises from 'flush-promises'
const { startIndex, result, q, orderBy } = useSearchBooks()

jest.mock('lodash.debounce', () => (fn: any) => {
  return fn
})

describe('@/composables/use-search-book', () => {
  describe('watch params', () => {
    test('qが変更されるとrepositoryからデータを取得します。', async () => {
      q.value = 'test'
      await flushPromises()
      expect(result.value).not.toBeNull()
    })
  })
})
