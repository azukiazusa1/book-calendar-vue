import { shallowMount } from '@vue/test-utils'
import LoginButtons from '@/components/organism/LoginButtons.vue'
import LoignButton from '@/components/molecules/LoginButton.vue'
import { userKey, userStore } from '@/store/user'

const mockPush = jest.fn()
jest.mock('vue-router', () => ({
  useRouter: () => {
    return {
      push: mockPush
    }
  }
}))

describe('LoginButtons.vue', () => {
  const wrapper = shallowMount(LoginButtons, {
    global: {
      provide: {
        [userKey as any]: userStore
      }
    }
  })

  const button = wrapper.findAllComponents(LoignButton)

  test('Googleでログインボタンを押すと、ストアにユーザーがセットされページ遷移する', async () => {
    await button[0].trigger('click')
    expect(userStore.state.user).not.toBeNull()

    expect(mockPush).toHaveBeenCalled()
  })
})
