import { computed, inject, InjectionKey, reactive, readonly } from 'vue'
import { UserState, UserStore } from '@/store/user/types'
import { User, UserPayload } from '@/repositories/user'
import RepositoryFactory, { USER } from '@/repositories/RepositoryFactory'
import { useAuth } from '@/composables/use-auth'
const UserRepository = RepositoryFactory[USER]
const { auth } = useAuth()

const state = reactive<UserState>({
  user: null
})

const get = computed(() => state.user)

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

/**
 * 現在ログインしているなら、stateにユーザーをセットします。
 */
export const created = async () => {
  const user = await auth()
  if (!user) return

  state.user = await UserRepository.find(user.uid)
}

created()

export const userStore = {
  state: readonly(state),
  get,
  set,
  unset,
  findOrCreate,
  update,
  delete: del
} as UserStore

export const userKey: InjectionKey<UserStore> = Symbol('user')

/**
 * userStoreを返します。
 */
export const useUserStore = () => {
  return inject(userKey, userStore)
}
