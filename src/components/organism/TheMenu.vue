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
        <ion-list-header class="ion-padding">
          <ion-item>
            <user-avatar slot="start" :user="user" />
            <ion-label>{{ user.displayName }}</ion-label>
          </ion-item>
        </ion-list-header>
        <ion-item @click="logout">
          <ion-button fill="clear" color="dark" size="default">
            ログアウト
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonMenu, IonListHeader, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue'
import UserAvatar from '@/components/atoms/UserAvatar.vue'
import { useUserStore } from '@/store/user'
import RegistoryFactory, { AUTH } from '@/repositories/RepositoryFactory'
import { useRouter } from 'vue-router'
const AuthRepository = RegistoryFactory[AUTH]

export default defineComponent({
  components: {
    IonMenu,
    IonListHeader,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    UserAvatar,
    IonButton
  },
  setup () {
    const userStore = useUserStore()
    const router = useRouter()

    const logout = async () => {
      console.log('logout')
      await AuthRepository.logout()
      userStore.unset()
      router.push('/')
    }

    return {
      user: userStore.get,
      logout
    }
  }
})
</script>
