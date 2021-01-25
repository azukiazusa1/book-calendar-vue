import { shallowMount } from '@vue/test-utils'
import LoginButtons from '@/components/organism/LoginButtons.vue'
import LoignButton from '@/components/molecules/LoginButton.vue'
import { userKey, userStore } from '@/store/user'
import flushPromises from 'flush-promises'

const mockPush = jest.fn()
jest.mock('vue-router', () => ({
  useRouter: () => {
    return {
      push: mockPush
    }
  }
}))

jest.mock('@/composables/use-auth', () => ({
  useAuth: () => {
    return {
      signInWithGoogle: jest.fn(() => {
        const user = {
          uid: 'uid',
          displayName: 'name',
          photoURL: 'photo'
        }
        return Promise.resolve(user)
      }),
      auth: () => {
        return Promise.resolve(null)
      }
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
    button[0].trigger('click')
    await flushPromises()
    expect(userStore.state.user).not.toBeNull()

    expect(mockPush).toHaveBeenCalled()
  })
})
