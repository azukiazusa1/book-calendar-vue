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
    test('stateにユーザーを設定する', () => {
      userStore.findOrCreate(user)
      expect(userStore.state.user).toBeDefined()
    })
  })
})
