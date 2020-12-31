<template>
  <ion-app>
    <the-header />
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/vue'
import TheHeader from '@/components/organism/TheHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    TheHeader,
    IonContent
  }
})
</script>
