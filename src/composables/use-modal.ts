import { ref } from 'vue'

export const useModal = () => {
  /**
   * モーダルの開閉状態
   */
  const isOpenModal = ref(false)

  /**
   * モーダルを開きます
   */
  const openModal = () => {
    isOpenModal.value = true
  }

  /**
   * モーダルを閉じます
   */
  const closeModal = () => {
    isOpenModal.value = false
  }

  return {
    isOpenModal,
    openModal,
    closeModal
  }
}
