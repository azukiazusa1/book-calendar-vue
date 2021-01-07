<template>
  <ion-searchbar
    animated
    placeholder="題名・著者・ISBN"
    :value="q"
    @input="$emit('update:q', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonSearchbar } from '@ionic/vue'
export default defineComponent({
  components: {
    IonSearchbar
  },
  props: {
    q: {
      type: String,
      required: true
    }
  }
})
</script>
