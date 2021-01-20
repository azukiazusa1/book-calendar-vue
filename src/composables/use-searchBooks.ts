import { computed, reactive, toRefs, ref, watch } from 'vue'
import { Result, Params, RELEVANCE } from '@/repositories/book'
import RepositoryFactory, { BOOK } from '@/repositories/RepositoryFactory'
import debounce from 'lodash.debounce'
import { useStorage } from '@/composables/use-storage'
const BookRepository = RepositoryFactory[BOOK]
const { set } = useStorage()
/**
 * 検索パラメータ
 */
const params = reactive<Params>({
  q: '',
  orderBy: RELEVANCE
})

export const setQ = (q: string) => {
  params.q = q
}

export const { q, orderBy } = toRefs(params)

/**
 * すべての要素を取得しきったかどうか判定します。
 * 取得結果の数 < 1ページあたりの取得数なら、
 * すべての要素を取得しきったと判定します。
 *
 * @param items 取得結果
 * @param limit 1ページあたりの取得数
 */
export const isFinished = (items: any[], limit = 10) => {
  return items.length < limit
}

export const useSearchBooks = async () => {
  const result = ref<Result | null>(null)
  const startIndex = ref(1)
  const isDisabled = ref(false)

  /**
   * 検索パラメータに変更があるたびに結果を取得します。
   * キーワードが未入力のときはなにもしません。
   * 検索パラメータが変更されたので1ページ目から取得しなおします。
   */
  watch(params, debounce(async () => {
    if (!params.q.trim()) return
    set(params.q.trim())
    startIndex.value = 1
    const r = await BookRepository.find({ ...params, startIndex: startIndex.value })
    result.value = r
  }, 300))

  const r = await BookRepository.find({ ...params, startIndex: startIndex.value })
  result.value = r

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
    isDisabled.value = isFinished(r.items)
  }

  /**
   * 取得結果が0件だったかどうか判定します。
   */
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
