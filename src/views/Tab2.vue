<template>
  <ion-page>
      <button @click="logout" >ログアウト</button>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'
import { AuthRepository } from '@/repositories/auth/AuthRepository'

export default {
  name: 'Tab2',
  components: {
    IonPage
  },
  setup () {
    const a = new AuthRepository()

    const logout = a.logout

    return {
      logout
    }
  }
}
</script>
