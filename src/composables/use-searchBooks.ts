import { computed, ref, watchEffect } from 'vue'
import { Result, BookRepository, OrderBy } from '@/repositories/book'

const b = new BookRepository()
export const q = ref('')
export const orderBy = ref<OrderBy>('relevance')

export const useSearchBooks = async () => {
  const result = ref<Result | null>(null)

  watchEffect(async () => {
    const r = await b.find({
      q: q.value,
      orderBy: orderBy.value
    })
    result.value = r
  })
  const r = await b.find({
    q: q.value,
    orderBy: orderBy.value
  })
  result.value = r

  const empty = computed(() => {
    return result.value?.totalItems === 0
  })

  return {
    result,
    empty
  }
}
