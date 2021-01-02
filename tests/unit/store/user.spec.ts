import { userStore, created } from '@/store/user'
import { auth } from '@/composables/use-auth'

jest.mock('@/composables/use-auth', () => ({
  auth: jest.fn()
}))

let mockLoggedIn: boolean
const user = {
  uid: 'uid',
  displayName: 'displayName',
  photoURL: 'photo'
}

const authMock = auth as jest.Mock
authMock.mockImplementation(() => {
  if (mockLoggedIn) {
    return Promise.resolve(user)
  } else {
    return Promise.resolve(null)
  }
})

describe('store/user', () => {
  beforeEach(() => {
    userStore.unset()
  })

  describe('created', () => {
    test('ログインしているなら、ユーザーがセットされる', async () => {
      mockLoggedIn = true
      await created()
      expect(userStore.state.user).toBeDefined()
    })

    test('ログインしていないなら、ユーザーはnullのまま', async () => {
      mockLoggedIn = false
      await created()
      expect(userStore.state.user).toBeNull()
    })
  })

  describe('findOrCreate', () => {
    test('stateにユーザーを設定する', async () => {
      await userStore.findOrCreate(user)
      expect(userStore.state.user).toBeDefined()
    })
  })

  describe('update', () => {
    test('stateのユーザーが更新される', async () => {
      userStore.set(user)
      const updateUser = {
        displayName: 'updateName',
        photoURL: 'updatePhoto'
      }
      await userStore.update(user.uid, updateUser)
      expect(userStore.state.user?.displayName).toBe(updateUser.displayName)
      expect(userStore.state.user?.photoURL).toBe(updateUser.photoURL)
      expect(userStore.state.user?.uid).toBe(user.uid)
    })
  })

  describe('delete', () => {
    test('stateのユーザーがnullに設定される', async () => {
      userStore.set(user)
      await userStore.delete(user.uid)
      expect(userStore.state.user).toBeNull()
    })
  })
})
