import { mount } from '@vue/test-utils'
import TheMenu from '@/components/organism/TheMenu.vue'
import { IonMenu } from '@ionic/vue'
import { useUserStore } from '@/store/user'

const mockPush = jest.fn()
jest.mock('vue-router', () => ({
  useRouter: () => {
    return {
      push: mockPush
    }
  }
}))

jest.mock('@/store/user', () => ({
  useUserStore: jest.fn()
}))

const mockLogout = jest.fn()
let mockLoggedIn: boolean
const user = {
  uid: 'uid',
  displayName: 'username',
  photoURL: 'photo'
}
;(useUserStore as jest.Mock).mockImplementation(() => {
  return {
    get: (() => {
      if (mockLoggedIn) {
        return user
      } else {
        return null
      }
    })(),
    logout: mockLogout
  }
})

const factory = () => {
  return mount(TheMenu)
}
describe('LoginButtons.vue', () => {
  test('ログインしていないならサイドメニューを表示しない', () => {
    mockLoggedIn = false
    const wrapper = factory()
    const menu = wrapper.findComponent(IonMenu)
    expect(menu.exists()).toBeFalsy()
  })

  test('ログインしているならサイドメニューを表示する', () => {
    mockLoggedIn = true
    const wrapper = factory()
    const userAvatar = wrapper.findComponent(IonMenu)
    expect(userAvatar.exists()).toBeTruthy()
  })
})
