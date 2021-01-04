import { ref, watchEffect } from 'vue'
import { Result, BookRepository, Params } from '@/repositories/book'

const b = new BookRepository()
export const useSearchBooks = async (params: Params) => {
  console.log(params)
  const res = ref<Result | null>(null)
  watchEffect(async () => {
    const r = await b.find(params)
    res.value = r
  })
  const r = await b.find(params)
  res.value = r
  res.value = r

  return res
}
