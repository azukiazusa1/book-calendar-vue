import { inject, InjectionKey, reactive, readonly } from 'vue'
import { User, UserState, UserStore } from '@/store/user/types'

const state = reactive<UserState>({
  user: null
})

const setUser = (user: User) => {
  state.user = user
}

export const userStore = {
  state: readonly(state),
  setUser
} as UserStore

export const userKey: InjectionKey<UserStore> = Symbol('user')

export const useUserStore = () => {
  return inject(userKey, userStore)
}
