import { createDummyBook, createDummyBooks } from '@/composables/utils'
import { useBookStore } from '@/store/book'
const { state, clearBooks, addBooks } = useBookStore()

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
})
