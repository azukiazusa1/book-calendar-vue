import { useLocalStorage } from 'vue-composable'

import { getPlatforms } from '@ionic/vue'

export const useStorage = (key: string) => {
  console.log(getPlatforms())

  return useLocalStorage(key)
}
