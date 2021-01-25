import { computed, reactive, toRefs, ref, watch } from 'vue'
import { Result, Params, RELEVANCE } from '@/repositories/book'
import RepositoryFactory, { BOOK } from '@/repositories/RepositoryFactory'
import debounce from 'lodash.debounce'
const BookRepository = RepositoryFactory[BOOK]

/**
 * 検索パラメータ
 */
const params = reactive<Params>({
  q: '',
  orderBy: RELEVANCE
})

const setQ = (q: string) => {
  params.q = q
}

const result = ref<Result | null>(null)
const startIndex = ref(1)
const loading = ref(true)

export const useSearchBooks = () => {
  /**
   * 検索パラメータに変更があるたびに結果を取得します。
   * キーワードが未入力のときはなにもしません。
   * 検索パラメータが変更されたので1ページ目から取得しなおします。
   */
  watch(params, debounce(async () => {
    if (!params.q.trim()) return
    loading.value = true
    startIndex.value = 1
    const r = await BookRepository.find({ ...params, startIndex: startIndex.value })
    result.value = r
    loading.value = false
  }, 300))

  /**
   * 次のページの要素を取得します。
   * @param e ionInfinite イベント
   */
  const nextPage = async (e: any) => {
    startIndex.value += 10
    const r = await BookRepository.find({ ...params, startIndex: startIndex.value })
    e.target.complete()
    if (result.value) {
      result.value.items = [...result.value.items, ...r.items]
    } else {
      result.value = r
    }
  }

  /**
 * すべての要素を取得しきったかどうか判定します。
 */
  const isFinished = computed(() => {
    if (!result.value) return false
    return result.value.totalItems <= result.value.items.length
  })

  /**
   * 取得結果が0件だったかどうか判定します。
   */
  const empty = computed(() => {
    return result.value?.totalItems === 0
  })

  return {
    ...toRefs(params),
    setQ,
    isFinished,
    result,
    startIndex,
    empty,
    nextPage,
    loading
  }
}
