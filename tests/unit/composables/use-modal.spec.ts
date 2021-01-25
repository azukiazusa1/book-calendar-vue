import { useModal } from '@/composables/use-modal'
const { isOpenModal, openModal, closeModal } = useModal()

describe('@/composables/use-modal', () => {
  beforeEach(() => {
    isOpenModal.value = false
  })
  describe('openModal', () => {
    test('isOpenModalをtrueにする', () => {
      openModal()
      expect(isOpenModal.value).toBeTruthy()
    })
  })

  describe('closeModal', () => {
    test('isOpenModalをfalseにする', () => {
      closeModal()
      expect(isOpenModal.value).toBeFalsy()
    })
  })
})
