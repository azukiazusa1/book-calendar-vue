import { createDummyBook, createDummyBooks } from '@/composables/utils'
import { useBookStore } from '@/store/book'
const { state, clearBooks, addBooks, setBooks, getBook } = useBookStore()

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

  describe('getBook', () => {
    test('idによってbookを取得します', () => {
      setBooks(createDummyBooks(3))
      const book = getBook('2')
      expect(book.id).toBe('2')
    })

    test('存在しないidの場合、例外をスローします。', () => {
      expect(() => getBook('2')).toThrow('book id: 2 is not found')
    })
  })
})
