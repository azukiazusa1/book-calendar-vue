import { BookItem, READ, READING, STOCK } from '@/repositories/book'

const setStatusAsReading = (book: BookItem) => {
  book.status = READING
  return book
}

const setStatusAsRead = (book: BookItem) => {
  book.status = READ
  return book
}

const setStatusAsStock = (book: BookItem) => {
  book.status = STOCK
  return book
}

export const useBookStatus = () => {
  return {
    setStatusAsRead,
    setStatusAsReading,
    setStatusAsStock
  }
}
