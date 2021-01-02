import { mount } from '@vue/test-utils'
import MenuHeader from '@/components/molecules/MenuHeader.vue'
import UserAvatar from '@/components/atoms/UserAvatar.vue'
import { IonLabel } from '@ionic/vue'

const user = {
  displayName: 'username',
  photoURL: 'photo'
}
describe('LoginButtons.vue', () => {
  const wrapper = mount(MenuHeader, {
    props: {
      user
    }
  })

  const label = wrapper.findComponent(IonLabel)
  const userAvatar = wrapper.findComponent(UserAvatar)

  test('propsで渡したユーザーのユーザー名が描画される', async () => {
    expect(label.text()).toBe('username')
  })

  test('UserAvatarにpropsのユーザーが渡される', () => {
    expect(userAvatar.props('user')).toEqual(user)
  })
})
