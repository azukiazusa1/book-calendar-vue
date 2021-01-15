<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <slot />
      </ion-title>
      <ion-buttons slot="end">
        <ion-button @click="$emit('onDismiss')">キャンセル</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/vue'
export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton
  },
  emits: {
    onDismiss: () => true
  }
})
</script>
