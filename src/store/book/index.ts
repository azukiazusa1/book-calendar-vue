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
 * 本を読書中として登録します。
 *
 * @param book
 */
const registAsReading = async (book: BookItem) => {
  const readingBook = setStatusAsReading(book)
  readingBook.startDate = new Date()
  const data = await BookRepository.regist(readingBook)
  state.books.push(data)
}

/**
 * 本を読了として登録します。
 *
 * @param book
 */
const registAsRead = async (book: BookItem, payload: BookPayload) => {
  const readBook = setStatusAsRead(book)
  console.log({ ...readBook, ...payload })
  const data = await BookRepository.regist({ ...readBook, ...payload })
  state.books.push(data)
}

/**
 * 本をストックとして登録します。
 *
 * @param book
 */
const registAsStock = async (book: BookItem) => {
  const stockBook = setStatusAsStock(book)
  const data = await BookRepository.regist(stockBook)
  state.books.push(data)
}

export const bookStore = {
  state: readonly(state),
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
