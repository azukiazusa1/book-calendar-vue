import { useStorage } from '@/composables/use-storage'

describe('@/composables/use-storage', () => {
  const { storage, get, set, remove, clear } = useStorage()

  beforeEach(() => {
    clear()
  })

  describe('get', () => {
    test('ローカルストレージに値がない場合には、空の配列を取得する', () => {
      expect(get()).toEqual([])
    })

    test('ローカルストレージに値がある場合には、その配列を取得する', () => {
      set('word1')
      set('word2')
      expect(get()).toEqual(['word2', 'word1'])
    })
  })

  describe('set', () => {
    test('引数で渡したワードを配列に追加する', () => {
      set('word1')
      expect(storage.value).toEqual(['word1'])
    })

    test('新たなワードは配列の先頭に追加される', () => {
      set('word1')
      set('word2')
      set('word3')
      expect(storage.value).toEqual(['word3', 'word2', 'word1'])
    })

    test('すでに存在しているワードを追加した場合、先頭に移動する', () => {
      set('word1')
      set('word2')
      set('word3')
      set('word1')
      expect(storage.value).toEqual(['word1', 'word3', 'word2'])
    })
  })

  describe('remove', () => {
    test('引数で渡したワードが削除される', () => {
      set('word1')
      set('word2')
      set('word3')
      remove('word2')
      expect(storage.value).toEqual(['word3', 'word1'])
    })
  })

  describe('clear', () => {
    test('すべての要素が削除される', () => {
      set('word1')
      set('word2')
      set('word3')
      clear()
      expect(storage.value).toEqual([])
    })
  })
})
