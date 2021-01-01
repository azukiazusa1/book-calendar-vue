<template>
  <ion-button :color="provider" shape="round" fill="outline">
    <span class="ion-text-capitalize">
      {{ provider }}でログイン
    </span>
    <ion-icon slot="start" :icon="icon" />
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
