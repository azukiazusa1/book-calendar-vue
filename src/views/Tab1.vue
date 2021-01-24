<template>
  <ion-page>
    <the-header />
      <calendar />
  </ion-page>
</template>

<script lang="ts">
import TheHeader from '@/components/organism/TheHeader.vue'
import { IonPage } from '@ionic/vue'
import { Calendar } from 'v-calendar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tab1',

  components: { Calendar, TheHeader, IonPage }
})
</script>
