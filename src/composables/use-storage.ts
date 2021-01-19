import { ref, readonly } from 'vue'

const KEY = 'search-word'
const storage = ref<string[]>([])

export const useStorage = () => {
  const get = () => {
    try {
      const value = localStorage.getItem(KEY) ?? '[]'
      return JSON.parse(value) as string[]
    } catch (e) {
      return []
    }
  }

  const set = (value: string) => {
    const newValues = [...get(), value]
    localStorage.setItem(KEY, JSON.stringify(newValues))
    storage.value = newValues
  }

  const remove = (value: string) => {
    const newValues = get().filter(v => v !== value)
    localStorage.setItem(KEY, JSON.stringify(newValues))
    storage.value = newValues
  }

  storage.value = get()

  return {
    get,
    set,
    remove,
    storage: readonly(storage)
  }
}
