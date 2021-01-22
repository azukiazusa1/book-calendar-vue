import { ref, readonly } from 'vue'

/** ローカルストレージのキー */
const KEY = 'search-word'
/** ローカルストレージの値をリアクティブに保持します。 */
const storage = ref<string[]>([])

export const useStorage = () => {
  /**
   * ローカルストレージから、配列の形式で値を取得します。
   */
  const get = () => {
    try {
      const value = localStorage.getItem(KEY) ?? '[]'
      return JSON.parse(value) as string[]
    } catch (e) {
      return []
    }
  }

  /**
   * 引数に渡したワードを削除します。
   * @param value
   */
  const remove = (value: string) => {
    const newValues = get().filter(v => v !== value)
    localStorage.setItem(KEY, JSON.stringify(newValues))
    storage.value = newValues
  }

  /**
   * 新たにワードをセットします。
   * すでに存在している場合、先頭に移動させます。
   * @param value
   */
  const set = (value: string) => {
    const values = get()
    if (values.includes(value)) {
      values.filter(v => v !== value)
    }
    values.push(value)
    localStorage.setItem(KEY, JSON.stringify(values))
    storage.value = values
  }

  /**
   * すべてのワードを削除します。
   */
  const clear = () => {
    localStorage.setItem(KEY, '[]')
    storage.value = []
  }

  storage.value = get()

  return {
    get,
    set,
    remove,
    clear,
    storage: readonly(storage)
  }
}
