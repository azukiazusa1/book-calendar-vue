<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button :defaultHref="defaultHref"></ion-back-button>
    </ion-buttons>
    <ion-title><slot /></ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/vue'

export default defineComponent({
  components: {
    IonToolbar, IonButtons, IonBackButton, IonTitle
  },
  props: {
    defaultHref: {
      type: String,
      required: false,
      default: undefined
    }
  }
})
</script>
