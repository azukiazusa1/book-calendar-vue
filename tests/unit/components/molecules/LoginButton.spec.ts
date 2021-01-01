import { mount } from '@vue/test-utils'
import LoginButton from '@/components/molecules/LoginButton.vue'
import { logoGoogle } from 'ionicons/icons'
import { IonButton, IonIcon } from '@ionic/vue'

describe('LoginButtons.vue', () => {
  const wrapper = mount(LoginButton, {
    props: {
      provider: 'google',
      icon: logoGoogle
    }
  })

  const button = wrapper.findComponent(IonButton)
  const icon = wrapper.findComponent(IonIcon)

  test('ボタンが正しく描画されている', async () => {
    expect(button.props('color')).toBe('google')
    expect(button.props('shape')).toBe('round')
    expect(button.props('fill')).toBe('outline')
  })

  test('ボタンの内部のテキストは「{{ provider }}でログイン」でproviderは先頭大文字', () => {
    expect(button.find('span').text()).toBe('googleでログイン')
    expect(button.find('span').classes()).toContain('ion-text-capitalize')
  })

  test('ボタンのアイコンはpropsで渡されたiconが使用され、ボタンの左側に描画される', () => {
    expect(icon.props('icon')).toBe(logoGoogle)
    expect(icon.attributes('slot')).toBe('start')
  })
})
