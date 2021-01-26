import { createDummyBook, createDummyBooks } from '@/composables/utils'
import { useBookStore } from '@/store/book'
import { start } from '@popperjs/core'
const { state, clearBooks, addBooks, setBooks } = useBookStore()

describe('@/store/book', () => {
  beforeEach(() => {
    clearBooks()
  })

  describe('addBooks', () => {
    describe('stateのbooksに追加します。', () => {
      test('bookの配列を渡した時', () => {
        addBooks(createDummyBooks(3))
        expect(state.books.length).toBe(3)

        addBooks(createDummyBooks(4))
        expect(state.books.length).toBe(7)
      })

      test('bookオブジェクトを渡した時', () => {
        addBooks(createDummyBooks(3))

        addBooks(createDummyBook())
        expect(state.books.length).toBe(4)
      })
    })
  })

  describe('setBooks', () => {
    test('stateのbooksを置き換えます', () => {
      setBooks(createDummyBooks(3))
      expect(state.books.length).toBe(3)

      setBooks(createDummyBooks(4))
      expect(state.books.length).toBe(4)
    })
  })
})
