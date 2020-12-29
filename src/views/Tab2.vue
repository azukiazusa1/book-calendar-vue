<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      {{ user }}
      <button @click="login" >ログイン</button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
import { AuthRepository } from '@/repositories/auth/AuthRepository'
import { computed } from 'vue'

export default {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup () {
    const a = new AuthRepository()
    const user = computed(async () => {
      const user = await a.auth()
      console.log(user)
      return user
    })

    const login = a.signInWithGoogle

    return {
      user,
      login
    }
  }
}
</script>
