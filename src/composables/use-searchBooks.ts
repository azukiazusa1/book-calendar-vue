import { computed, ref, watchEffect } from 'vue'
import { Result, BookRepository, Params } from '@/repositories/book'

const b = new BookRepository()
export const useSearchBooks = async (params: Params) => {
  const result = ref<Result | null>(null)
  watchEffect(async () => {
    console.log(params)
    const r = await b.find(params)
    result.value = r
  })
  const r = await b.find(params)
  result.value = r

  const empty = computed(() => {
    return result.value?.totalItems === 0
  })

  return {
    result,
    empty
  }
}
