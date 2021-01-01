<template>
  <ion-menu
    side="end"
    menu-id="first"
    content-id="main"
    :disabled="!user"
    v-if="user"
  >
    <ion-header>
      <ion-item>
        <user-avatar slot="start" :user="user" />
        <ion-label>{{ user.displayName }}</ion-label>
      </ion-item>
    </ion-header>
    <ion-content id="main" class="ion-padding">
      <ion-list>
        <ion-item>ログアウト</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonMenu, IonHeader, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue'
import UserAvatar from '@/components/atoms/UserAvatar.vue'
import { useUserStore } from '@/store/user'

export default defineComponent({
  components: {
    IonMenu,
    IonHeader,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    UserAvatar
  },
  setup () {
    const userStore = useUserStore()

    return {
      user: userStore.get
    }
  }
})
</script>
