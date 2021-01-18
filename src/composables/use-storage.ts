import { computed } from 'vue'
import { useLocalStorage } from 'vue-composable'

export const useStorage = (key: string) => {
  const { storage } = useLocalStorage(key)

  const get = (): string[] => {
    try {
      return JSON.parse(storage.value)
    } catch (e) {
      return []
    }
  }

  const set = (value: string) => {
    const oldValues = get()
    const newValues = [...oldValues, value]
    storage.value = JSON.stringify(new Set(newValues))
  }

  return {
    storage,
    get,
    set
  }
}
