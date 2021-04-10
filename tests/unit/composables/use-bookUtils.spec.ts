import { useBookUtils } from '@/composables/use-bookUtils'
import { createDummyBook } from '@/composables/utils'
const { thumbnail } = useBookUtils()

describe('@/composables/use-bookUtils', () => {
  const book = createDummyBook()

  describe('thumbnail', () => {
    test('size mediumを指定したとき、通常のサムネイルを返す', () => {
      const result = thumbnail(book, 'medium')
      expect(result.value).toEqual('https://placehold.jp/350x240.png')
    })
    test('size smallを指定したとき、小さめのサムネイルを返す', () => {
      const result = thumbnail(book, 'small')
      expect(result.value).toEqual('https://placehold.jp/150x150.png')
    })
  })
})
