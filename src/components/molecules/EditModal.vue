<template>
  <modal-header @click="$emit('onDismiss')">読んだ本として登録<modal-header>
  <ion-content fullscreen>
    <book-form :title="book.title" />
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonContent } from '@ionic/vue'
import { BookItem } from '@/repositories/book'
import ModalHeader from '@/components/molecules/ModalHeader.vue'
import BookForm from '@/components/molecules/BookForm.vue'

export default defineComponent({
  components: {
    IonContent,
    ModalHeader,
    BookForm
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  emits: {
    onDismiss: () => true
  }
})
</script>
