import { BookItem } from '@/repositories/book'
import { computed } from 'vue'

export type ThumnailSize = 'small' | 'medium'

export const useBookUtils = () => {
  const thumbnail = (book: BookItem, size: ThumnailSize) => computed(() => {
    if (size === 'small') {
      return book.imageLinks?.smallThumbnail ?? '/assets/icon/no-image.png'
    } else if (size === 'medium') {
      return book.imageLinks?.thumbnail ?? '/assets/icon/no-image.png'
    }
  })

  return {
    thumbnail
  }
}
