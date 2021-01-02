import { mount, shallowMount } from '@vue/test-utils'
import TheMenu from '@/components/organism/TheMenu.vue'
import MenuItem from '@/components/atoms/MenuItem.vue'
import { IonMenu } from '@ionic/vue'
import { useUserStore } from '@/store/user'
import { logout } from '@/composables/use-auth'
import flushPromises from 'flush-promises'

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

const mockUnset = jest.fn()
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
    unset: mockUnset
  }
})

jest.mock('@/composables/use-auth', () => ({
  logout: jest.fn()
}))

describe('LoginButtons.vue', () => {
  describe('サイドメニューの表示', () => {
    const factory = () => {
      return shallowMount(TheMenu)
    }

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

  describe('各メニューをクリックしたとき', () => {
    mockLoggedIn = true
    const wrapper = mount(TheMenu)
    const menuItems = wrapper.findAllComponents(MenuItem)

    test('1つ目のメニューをクリックしたらログアウトする', async () => {
      menuItems[0].trigger('click')
      await flushPromises()
      expect(logout).toHaveBeenCalled()
      expect(mockUnset).toHaveBeenCalled()
      expect(mockPush).toHaveBeenCalledWith('/')
    })
  })
})
