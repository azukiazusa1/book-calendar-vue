<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Tab 1</ion-title>
      <ion-buttons v-if="user" slot="end">
        <user-avator :user="user" />
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
import UserAvator from '@/components/atoms/UserAvator.vue'
import { useUserStore } from '@/store/user'

export default defineComponent({
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    UserAvator
  },
  setup () {
    const userStore = useUserStore()

    return {
      user: userStore.get
    }
  }
})
</script>
