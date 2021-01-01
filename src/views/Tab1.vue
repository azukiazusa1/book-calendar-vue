<template>

  <ion-page>
      <calendar />
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'
import { Calendar } from 'v-calendar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tab1',

  components: { Calendar, IonPage }
})
</script>
