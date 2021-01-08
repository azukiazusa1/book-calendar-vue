<template>
  <ion-toast
    :is-open="isOpen"
    :message="message"
    color="danger"
    position="middle"
    :duration="2000"
  >
  </ion-toast>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonToast } from '@ionic/vue'
export default defineComponent({
  components: {
    IonToast
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    message: {
      type: String,
      required: false,
      default: '予期せぬエラーが発生しました。'
    }
  }
})
</script>
