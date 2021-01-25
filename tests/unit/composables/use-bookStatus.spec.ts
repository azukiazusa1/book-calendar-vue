import { useBookStatus } from '@/composables/use-bookStatus'
import { READ, READING, STOCK } from '@/repositories/book'
import { createDummyBook } from '@/composables/utils'
const { setStatusAsRead, setStatusAsReading, setStatusAsStock } = useBookStatus()

describe('@/composables/use-bookStatus', () => {
  describe('setStatusAsRead', () => {
    test('本のステータスを読書完了にする', () => {
      const readBook = setStatusAsRead(createDummyBook())
      expect(readBook.status).toEqual(READ)
    })
  })

  describe('setStatusAsReading', () => {
    test('本のステータスを読書中にする', () => {
      const readingBook = setStatusAsReading(createDummyBook())
      expect(readingBook.status).toEqual(READING)
    })
  })

  describe('setStatusAsStock', () => {
    test('本のステータスをストックにする', () => {
      const stockBook = setStatusAsStock(createDummyBook())
      expect(stockBook.status).toEqual(STOCK)
    })
  })
})
