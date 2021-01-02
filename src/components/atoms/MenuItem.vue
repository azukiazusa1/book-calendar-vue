<template>
  <ion-item>
    <ion-button fill="clear" color="dark" size="default">
      <slot />
    </ion-button>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonItem, IonButton } from '@ionic/vue'

export default defineComponent({
  components: {
    IonItem,
    IonButton
  }
})
</script>
