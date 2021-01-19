const KEY = 'search-word'

export const useStorage = () => {
  const get = () => {
    try {
      const storage = localStorage.getItem(KEY) ?? '[]'
      return JSON.parse(storage) as string[]
    } catch (e) {
      return []
    }
  }

  const set = (value: string) => {
    const newValues = [...get(), value]
    localStorage.setItem(KEY, JSON.stringify(newValues))
  }

  return {
    get,
    set
  }
}
