import { mount } from '@vue/test-utils'
import TheHeader from '@/components/organism/TheHeader.vue'
import UserAvatar from '@/components/atoms/UserAvatar.vue'
import { useUserStore } from '@/store/user'

jest.mock('@/store/user', () => ({
  useUserStore: jest.fn()
}))

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
    })()
  }
})

const factory = () => {
  return mount(TheHeader)
}
describe('TheHeader.vue', () => {
  test('ログインしていないならユーザーアバターを表示しない', () => {
    mockLoggedIn = false
    const wrapper = factory()
    const userAvatar = wrapper.findComponent(UserAvatar)
    expect(userAvatar.exists()).toBeFalsy()
  })

  test('ログインしているならユーザーアバターを表示する', () => {
    mockLoggedIn = true
    const wrapper = factory()
    const userAvatar = wrapper.findComponent(UserAvatar)
    expect(userAvatar.exists()).toBeTruthy()
  })
})
