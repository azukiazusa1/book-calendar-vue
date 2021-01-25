import { useBookStatus } from '@/composables/use-bookStatus'
import { BookItem, BookPayload } from '@/repositories/book'
import RepositoryFactory, { BOOK } from '@/repositories/RepositoryFactory'
import { reactive, readonly, InjectionKey, inject } from 'vue'
import { BookState, BookStore } from './types'
const BookRepository = RepositoryFactory[BOOK]
const { setStatusAsRead, setStatusAsReading, setStatusAsStock } = useBookStatus()

const state = reactive<BookState>({
  books: []
})

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
const registAsReading = async (book: BookItem) => {
  const readingBook = setStatusAsReading(book)
  readingBook.startDate = new Date()
  await BookRepository.regist(readingBook)
}

/**
 * 本を読了として登録します。
 *
 * @param book
 */
const registAsRead = async (book: BookItem, payload: BookPayload) => {
  const readBook = setStatusAsRead(book)
  console.log({ ...readBook, ...payload })
  await BookRepository.regist({ ...readBook, ...payload })
}

/**
 * 本をストックとして登録します。
 *
 * @param book
 */
const registAsStock = async (book: BookItem) => {
  const stockBook = setStatusAsStock(book)
  await BookRepository.regist(stockBook)
}

export const bookStore = {
  state: readonly(state),
  setBooks,
  addBooks,
  registAsReading,
  registAsRead,
  registAsStock
}

export const bookKey: InjectionKey<BookStore> = Symbol('book')

/**
 * userStoreを返します。
 */
export const useBookStore = () => {
  return inject(bookKey, bookStore)
}
