import { computed, reactive, toRefs, ref, watch } from 'vue'
import { Result, BookRepository, Params } from '@/repositories/book'

const b = new BookRepository()

const params = reactive<Params>({
  q: '',
  orderBy: 'relevance'
})

export const { q, orderBy } = toRefs(params)
export const isFinished = (items: any[], limit = 10) => {
  return items.length < limit
}

export const useSearchBooks = async () => {
  const result = ref<Result | null>(null)
  const startIndex = ref(1)
  const isDisabled = ref(false)

  watch(params, async () => {
    if (!params.q) return
    startIndex.value = 1
    const r = await b.find({ ...params, startIndex: startIndex.value })
    result.value = r
  })
  const r = await b.find(params)
  result.value = r

  const nextPage = async (e: any) => {
    startIndex.value += 10
    const r = await b.find({ ...params, startIndex: startIndex.value })
    e.target.complete()
    if (result.value) {
      result.value.items = [...result.value.items, ...r.items]
    } else {
      result.value = r
    }
    isDisabled.value = isFinished(r.items)
  }

  const empty = computed(() => {
    return result.value?.totalItems === 0
  })

  return {
    result,
    empty,
    nextPage,
    isDisabled
  }
}
