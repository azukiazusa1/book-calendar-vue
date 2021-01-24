<template>
  <ion-menu
    side="end"
    menu-id="first"
    content-id="main"
    :disabled="!user"
    v-if="user"
  >
    <ion-content id="main">
      <ion-list>
        <menu-header :user="user" />
        <menu-item @click="clickLogout">ログアウト</menu-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonMenu, IonContent, IonList } from '@ionic/vue'
import MenuItem from '@/components/atoms/MenuItem.vue'
import MenuHeader from '@/components/molecules/MenuHeader.vue'
import { useUserStore } from '@/store/user'
import { useAuth } from '@/composables/use-auth'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    IonMenu,
    IonContent,
    IonList,
    MenuItem,
    MenuHeader
  },
  setup () {
    const userStore = useUserStore()
    const router = useRouter()
    const { logout } = useAuth()

    const clickLogout = async () => {
      console.log('logout')
      await logout()
      userStore.unset()
      router.push('/')
    }

    return {
      user: userStore.get,
      clickLogout
    }
  }
})
</script>
