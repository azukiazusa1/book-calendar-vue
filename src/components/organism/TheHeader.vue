<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Tab 1</ion-title>
      <ion-buttons v-if="user" slot="end">
        <user-avatar :user="user" />
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons
} from '@ionic/vue'
import { defineComponent } from 'vue'
import UserAvatar from '@/components/atoms/UserAvatar.vue'
import { useUserStore } from '@/store/user'

export default defineComponent({
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
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
