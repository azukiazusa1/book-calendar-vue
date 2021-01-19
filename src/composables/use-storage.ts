import { useLocalStorage } from 'vue-composable'

const { storage } = useLocalStorage('search-word')
export const useStorage = () => {
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
    storage.value = JSON.stringify([...new Set(newValues)])
  }

  return {
    storage,
    get,
    set
  }
}
