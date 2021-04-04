<template>
  <ion-card v-if="book.status === READ">
    <ion-card-header>
      <ion-card-title>感想 <ion-icon :icon="createOutline" class="ion-float-right edit-icon" @click="onEditClick" /></ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div v-if="isEditMode">
        <ion-textarea v-model="comment"
        ref="root"
        rows="6"
        cols="20"/>
        <div class="ion-float-right ion-margin-top">
          <ion-button
            class="ion-margin-end"
            fill="outline"
            size="small"
            color="medium">キャンセル</ion-button>
          <ion-button size="small">更新</ion-button>
        </div>
      </div>
      <p v-else>{{ book.comment }}</p>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonTextarea,
  IonButton
} from '@ionic/vue'
import { createOutline } from 'ionicons/icons'
import { defineComponent, PropType, ref, nextTick } from 'vue'
import { BookItem, READ } from '@/repositories/book'

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonTextarea,
    IonButton
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  async setup (props) {
    const root = ref<{ $el: HTMLIonInputElement } | null>(null)
    const isEditMode = ref(false)
    const comment = ref(props.book.comment ?? '')

    const onEditClick = () => {
      console.log('onEditClick')
      isEditMode.value = !isEditMode.value
      if (isEditMode.value) {
        nextTick(() => root?.value?.$el?.setFocus())
      }
    }

    return {
      root,
      isEditMode,
      comment,
      onEditClick,
      createOutline,
      READ
    }
  }
})
</script>

<style scoped>
.edit-icon {
  cursor: pointer;
}
</style>
