import { createDummyBook, createDummyBooks } from '@/composables/utils'
import { READING, STOCK } from '@/repositories/book'
import { useBookStore } from '@/store/book'
import { MockBookRepository } from '@/repositories/book/MockBookRepository'
const {
  state,
  clearBooks,
  addBooks,
  setBooks,
  getBook,
  bookCount,
  registAsReading,
  registAsStock
} = useBookStore()

const registSpy = jest.spyOn(MockBookRepository.prototype, 'regist')

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

  describe('bookCount', () => {
    test('現在のbookの個数を返します', () => {
      expect(bookCount.value).toBe(0)
      setBooks(createDummyBooks(3))
      expect(bookCount.value).toBe(3)
    })
  })

  describe('registAsReading', () => {
    describe('本を読書中として登録します', () => {
      test('stateの値が変更される', async () => {
        setBooks(createDummyBooks(3))
        await registAsReading('2')
        expect(getBook('2').status).toBe(READING)
      })
    })

    test('BookRepository registが呼ばれる', async () => {
      setBooks(createDummyBooks(3))
      await registAsReading('2')
      expect(registSpy).toHaveBeenCalled()
    })
  })

  describe('registAsStock', () => {
    test('本をストックとして登録します。', async () => {
      setBooks(createDummyBooks(3))
      await registAsStock('2')
      expect(getBook('2').status).toBe(STOCK)
    })

    test('BookRepository registが呼ばれる', async () => {
      setBooks(createDummyBooks(3))
      await registAsStock('2')
      expect(registSpy).toHaveBeenCalled()
    })
  })
})
