import { BookItem } from '@/repositories/book'
import { striptags } from 'striptags'
import { computed } from 'vue'

export type ThumnailSize = 'small' | 'medium'

export const useBookUtils = () => {
  /**
   * サイズに合わせた本のサムネイル画像を返します。
   * 本がサムネイル画像を持っていにない場合にはno-image画像を返します
   * @param book
   * @param size
   * @returns
   */
  const thumbnail = (book: BookItem, size: ThumnailSize) => computed(() => {
    if (size === 'small') {
      return book.imageLinks?.smallThumbnail ?? '/assets/icon/no-image.png'
    } else if (size === 'medium') {
      return book.imageLinks?.thumbnail ?? '/assets/icon/no-image.png'
    }
  })

  /**
   * 本の詳細情報からHTMLを削除して返します。
   * @param book
   */
  const striptTagsDescription = (book: BookItem) => computed(() => striptags(book.description ?? ''))

  return {
    thumbnail,
    striptTagsDescription
  }
}
