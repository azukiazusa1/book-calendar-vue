<template>
  <ion-item button :detail-icon="arrowUpOutline">
    <ion-label>
      {{ word }}
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonItem, IonLabel } from '@ionic/vue'
import { arrowUpOutline } from 'ionicons/icons'

export default defineComponent({
  components: {
    IonItem,
    IonLabel
  },
  props: {
    word: {
      type: String,
      required: true
    }
  },
  setup () {
    return {
      arrowUpOutline
    }
  }
})
</script>
