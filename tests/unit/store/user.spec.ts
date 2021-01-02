import { userStore, created } from '@/store/user'
import { auth } from '@/composables/use-auth'

jest.mock('@/composables/use-auth', () => ({
  auth: jest.fn()
}))

let mockLoggedIn: boolean

const authMock = auth as jest.Mock
authMock.mockImplementation(() => {
  if (mockLoggedIn) {
    return Promise.resolve({
      uid: 'uid',
      displayName: 'displayName',
      photoURL: 'photo'
    })
  } else {
    return Promise.resolve(null)
  }
})

describe('store/user', () => {
  describe('created', () => {
    test('ログインしているなら、ユーザーがセットされる', async () => {
      mockLoggedIn = true
      await created()
      expect(userStore.state.user).not.toBeNull()
    })

    test('ログインしていないなら、ユーザーはnullのまま', async () => {
      mockLoggedIn = false
      await created()
      expect(userStore.state.user).not.toBeNull()
    })
  })
})
