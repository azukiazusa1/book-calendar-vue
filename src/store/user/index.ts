import { InjectionKey, reactive, readonly } from 'vue'
import { User, UserState, UserStore } from '@/store/user/types'

const state = reactive<UserState>({
  user: null
})

const setUser = (user: User) => {
  console.log(user)
  state.user = user
}

const userStore = {
  state: readonly(state),
  setUser
} as UserStore

export default userStore

export const userKey: InjectionKey<UserStore> = Symbol('user')
