<template>
  <ion-app>
    <the-menu />
    <the-header />
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/vue'
import TheHeader from '@/components/organism/TheHeader.vue'
import { defineComponent, provide } from 'vue'
import { userStore, userKey } from '@/store/user'
import { bookStore, bookKey } from '@/store/book'
import TheMenu from '@/components/organism/TheMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    TheHeader,
    IonContent,
    TheMenu
  },
  setup () {
    provide(userKey, userStore)
    provide(bookKey, bookStore)
  }
})
</script>
