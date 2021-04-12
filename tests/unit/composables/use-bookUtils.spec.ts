import { useBookUtils } from '@/composables/use-bookUtils'
import { createDummyBook } from '@/composables/utils'
const { thumbnail } = useBookUtils()

describe('@/composables/use-bookUtils', () => {
  describe('thumbnail', () => {
    test('size mediumを指定したとき、通常のサムネイルを返す', () => {
      const book = createDummyBook()
      const result = thumbnail(book, 'medium')
      expect(result.value).toEqual('https://placehold.jp/350x240.png')
    })

    test('size smallを指定したとき、小さめのサムネイルを返す', () => {
      const book = createDummyBook()
      const result = thumbnail(book, 'small')
      expect(result.value).toEqual('https://placehold.jp/150x150.png')
    })

    test('size mediumを指定した時、通常のサムネイルが存在しないときはno imageを返す', () => {
      const book = createDummyBook()
      book.imageLinks = undefined
      const result = thumbnail(book, 'medium')
      expect(result.value).toEqual('/assets/icon/no-image.png')
    })

    test('size smallを指定した時、小さめのサムネイルが存在しないときはno imageを返す', () => {
      const book = createDummyBook()
      book.imageLinks = undefined
      const result = thumbnail(book, 'small')
      expect(result.value).toEqual('/assets/icon/no-image.png')
    })
  })
})
