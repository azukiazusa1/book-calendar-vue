import { ref } from 'vue'

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

export const useModal = () => {
  return {
    isOpenModal,
    openModal,
    closeModal
  }
}
