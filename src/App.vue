<template>
  <ion-app>
    <ion-page>
      <the-header />
      <ion-content>
        <ion-router-outlet />
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonPage, IonRouterOutlet, IonContent } from '@ionic/vue'
import TheHeader from '@/components/organism/TheHeader.vue'
import { defineComponent, provide } from 'vue'
import userStore, { userKey } from '@/store/user'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonPage,
    IonRouterOutlet,
    TheHeader,
    IonContent
  },
  setup () {
    provide(userKey, userStore)
  }
})
</script>
