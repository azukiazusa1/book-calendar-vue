<template>

  <ion-button :color="provider">
    {{ provider }}でログイン
      <ion-icon slot="start" color="light" :icon="icon" />
  </ion-button>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonButton, IonIcon },
  props: {
    provider: {
      type: String,
      requreid: true
    },
    icon: {
      type: String,
      requreid: false,
      default: ''
    }
  }
})
</script>

<style scoped>
.ion-color-google {
  --ion-color-base: var(--ion-color-google) !important;
}
</style>
