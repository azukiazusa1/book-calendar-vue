import { useBookStatus } from '@/composables/use-bookStatus'
import { BookItem, BookPayload } from '@/repositories/book'
import RepositoryFactory, { BOOK } from '@/repositories/RepositoryFactory'
import { computed, reactive, readonly } from 'vue'
import { BookState } from './types'
const BookRepository = RepositoryFactory[BOOK]
const { setStatusAsRead, setStatusAsReading, setStatusAsStock } = useBookStatus()

const state = reactive<BookState>({
  books: []
})

/**
 * idから特定の本を取得します。
 * @param id
 */
const getBook = (id: string) => {
  const book = state.books.find(book => book.id === id)
  return book
}

/**
 * idから特定の本がstateに保持されているかどうが判定します。
 * @param id
 */
const hasBook = (id: string) => {
  const book = state.books.find(book => book.id === id)
  return !!book
}

/**
 * bookの数
 *
 */
const bookCount = computed(() => state.books.length)

const clearBooks = () => {
  state.books = []
}

/**
 * 現在のbooksを新しいもので置き換えます。
 * @param books
 */
const setBooks = (books: BookItem[]) => {
  state.books = books
}

/**
 * 現在のbooksの後に追加します。
 * @param books
 */
const addBooks = (books: BookItem[] | BookItem) => {
  const newBooks = Array.isArray(books) ? books : [books]
  state.books = [...state.books, ...newBooks]
}
/**
 * 本を読書中として登録します。
 *
 * @param book
 */
const registAsReading = async (id: string) => {
  const book = getBook(id)
  if (!book) {
    throw new Error(`book id: ${id} is not found`)
  }

  const readingBook = setStatusAsReading(book)
  readingBook.startDate = new Date()
  await BookRepository.regist(readingBook)
}

/**
 * 本を読了として登録します。
 *
 * @param book
 */
const registAsRead = async (id: string, payload: BookPayload) => {
  const book = getBook(id)
  if (!book) {
    throw new Error(`book id: ${id} is not found`)
  }

  const readBook = setStatusAsRead(book)
  readBook.startDate = payload.startDate
  readBook.endDate = payload.endDate
  readBook.comment = payload.comment
  await BookRepository.regist(readBook)
}

/**
 * 本をストックとして登録します。
 *
 * @param book
 */
const registAsStock = async (id: string) => {
  const book = getBook(id)
  if (!book) {
    throw new Error(`book id: ${id} is not found`)
  }

  const stockBook = setStatusAsStock(book)
  await BookRepository.regist(stockBook)
}

/**
 * idによって本を取得します。
 * @param id
 */
const findById = async (id: string) => {
  const book = await BookRepository.findById(id)
  addBooks(book)
}

export const useBookStore = () => {
  return {
    state: readonly(state),
    getBook,
    hasBook,
    setBooks,
    clearBooks,
    bookCount,
    addBooks,
    registAsReading,
    registAsRead,
    registAsStock,
    findById
  }
}
