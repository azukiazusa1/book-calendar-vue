import { setReading } from '@/composables/use-bookStatus'
import { BookItem } from '@/repositories/book'
import { reactive, readonly, InjectionKey, inject } from 'vue'
import { BookState, BookStore } from './types'

const state = reactive<BookState>({
  books: []
})

/**
 * 本を読書中として登録します。
 *
 * @param book
 */
const registAsReading = async (book: BookItem) => {
  const readingBook = setReading(book)
  readingBook.startDate = new Date()
}

/**
 * 本を読了として登録します。
 *
 * @param book
 */
const registAsRead = async (book: BookItem) => {

}

/**
 * 本をストックとして登録します。
 *
 * @param book
 */
const registAsStock = async (book: BookItem) => {

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
