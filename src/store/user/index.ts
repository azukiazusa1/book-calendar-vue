import { InjectionKey, reactive, readonly } from 'vue'
import { User, UserState, UserStore } from '@/store/user/types'

const state = reactive<UserState>({
  user: null
})

const setUser = (user: User) => {
  state.user = user
}

const userStore = {
  state: readonly(state),
  setUser
} as UserStore

export default userStore

export const key: InjectionKey<UserStore> = Symbol('user')
