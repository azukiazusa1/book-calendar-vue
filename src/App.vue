<template>
  <ion-app>
    <the-menu />
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/vue'
import { defineComponent, provide } from 'vue'
import { userStore, userKey } from '@/store/user'
import TheMenu from '@/components/organism/TheMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonContent,
    TheMenu
  },
  setup () {
    provide(userKey, userStore)
  }
})
</script>
