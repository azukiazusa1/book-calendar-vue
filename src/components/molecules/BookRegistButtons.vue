<template>
  <ion-button
    class="button ion-margin-end"
    size="small"
    color="secondary"
    @click="onClickReading"
  >
    読書開始
  </ion-button>
  <ion-button
    class="button ion-margin-end"
    size="small"
    color="tertiary"
    @click="onClickRead"
  >
    読了
  </ion-button>
  <ion-button
    class="button ion-margin-end"
    size="small"
    color="success"
    @click="onClickStock"
  >
    ストック
  </ion-button>
</template>

<script lang="ts">
import { IonButton } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonButton
  },
  emits: ['clickRead', 'clickReading', 'clickStock'],
  setup (_, { emit }) {
    const onClickRead = () => {
      emit('clickRead')
    }

    const onClickReading = () => {
      emit('clickReading')
    }

    const onClickStock = () => {
      emit('clickStock')
    }

    return {
      onClickRead,
      onClickReading,
      onClickStock
    }
  }
})
</script>
