import { inject, InjectionKey, reactive, readonly } from 'vue'
import { UserState, UserStore } from '@/store/user/types'
import { User, UserPayload } from '@/repositories/user'
import RepositoryFactory, { USER } from '@/repositories/RepositoryFactory'
const UserRepository = RepositoryFactory[USER]

const state = reactive<UserState>({
  user: null
})

const set = (user: User) => {
  state.user = user
}

const unset = () => {
  state.user = null
}

const findOrCreate = async (user: User) => {
  const result = await UserRepository.findOrCreate(user)
  set(result)
}

const update = async (uid: string, payload: UserPayload) => {
  await UserRepository.update(uid, payload)
  state.user = {
    ...state.user,
    displayName: payload.displayName,
    photoURL: payload.photoURL
  } as User
}

const del = async (uid: string) => {
  await UserRepository.delete(uid)
  unset()
}

export const userStore = {
  state: readonly(state),
  set,
  unset,
  findOrCreate,
  update,
  delete: del
} as UserStore

export const userKey: InjectionKey<UserStore> = Symbol('user')

export const useUserStore = () => {
  return inject(userKey, userStore)
}
