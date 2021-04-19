import { reactive, toRefs, ref, watch } from 'vue'
import { Result, Params, RELEVANCE, BookItem } from '@/repositories/book'
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

export const useSearchParams = () => {
  return {
    ...toRefs(params),
    setQ
  }
}

const result = ref<Result | null>(null)
const startIndex = ref(1)
const loading = ref(false)

export const useSearchBooks = (
  setFunc: (items: BookItem[]) => void,
  addFunc: (items: BookItem[]) => void
) => {
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
    setFunc(r.items)
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
    addFunc(r.items)
  }

  return {
    result,
    startIndex,
    nextPage,
    loading
  }
}
