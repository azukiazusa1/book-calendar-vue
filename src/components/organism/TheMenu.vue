<template>
    <ion-menu side="end" menu-id="first" content-id="main" :disabled="!user">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="main">
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
import { IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle } from '@ionic/vue'
import { useUserStore } from '@/store/user'

export default defineComponent({
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonTitle
  },
  setup () {
    const userStore = useUserStore()

    return {
      user: userStore.get
    }
  }
})
</script>
