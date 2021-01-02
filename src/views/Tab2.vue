<template>
  <ion-page>
      <button @click="logout" >ログアウト</button>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'

export default {
  name: 'Tab2',
  components: {
    IonPage
  }
}
</script>
