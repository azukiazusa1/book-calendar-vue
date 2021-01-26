import { Result } from '@/repositories/book'
import { ref, Ref } from 'vue'
import { useSearchStatus } from '@/composables/use-searchStatus'
import { createDummyBooks } from '@/composables/utils'

describe('@/composables/use-searchStatus', () => {
  let result: Ref<Result>

  beforeEach(() => {
    result = ref({
      kind: 'value',
      totalItems: 0,
      items: []
    })
  })
  describe('isFinished', () => {
    test('totalItems > bookCountのときはfalse', () => {
      result.value.totalItems = 10
      const { isFinished } = useSearchStatus(result, ref(createDummyBooks(9)))
      expect(isFinished.value).toBeFalsy()
    })

    test('totalItems = items のときはtrue', async () => {
      result.value.totalItems = 10
      const { isFinished } = useSearchStatus(result, ref(createDummyBooks(10)))
      expect(isFinished.value).toBeTruthy()
    })

    test('totalItems < itemsのときはtrue', () => {
      result.value.totalItems = 10
      const { isFinished } = useSearchStatus(result, ref(createDummyBooks(11)))
      expect(isFinished.value).toBeTruthy()
    })
  })

  describe('empty', () => {
    test('totalItemsが0以外のときはfalse', () => {
      result.value.totalItems = 10
      const { empty } = useSearchStatus(result, ref(createDummyBooks(10)))
      expect(empty.value).toBeFalsy()
    })

    test('totalItemsが0のときはtrue', () => {
      result.value.totalItems = 0
      const { empty } = useSearchStatus(result, ref([]))
      expect(empty.value).toBeTruthy()
    })
  })
})
