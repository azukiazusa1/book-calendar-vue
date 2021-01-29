import { Ref, computed, DeepReadonly } from 'vue'
import { Result } from '@/repositories/book'

export const useSearchStatus = (result: Ref<Result | null>, items: Ref<any[]> | DeepReadonly<Ref<any[]>>) => {
  /**
 * すべての要素を取得しきったかどうか判定します。
 */
  const isFinished = computed(() => {
    if (!result.value) return false
    return result.value.totalItems <= items.value.length
  })

  /**
 * 取得結果が0件だったかどうか判定します。
 */
  const empty = computed(() => {
    return result.value?.totalItems === 0
  })

  return {
    isFinished,
    empty
  }
}
