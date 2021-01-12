import { BookItem, READ, READING, STOCK } from '@/repositories/book'

export const setStatusAsReading = (book: BookItem) => {
  book.status = READING
  return book
}

export const setStatusAsRead = (book: BookItem) => {
  book.status = READ
  return book
}

export const setStatusAsStock = (book: BookItem) => {
  book.status = STOCK
  return book
}
