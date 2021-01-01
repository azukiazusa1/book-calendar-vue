<template>
  <ion-page>
    <login-buttons />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage } from '@ionic/vue'
import LoginButtons from '@/components//organism/LoginButtons.vue'

export default defineComponent({
  components: {
    LoginButtons,
    IonPage
  }

})
</script>
