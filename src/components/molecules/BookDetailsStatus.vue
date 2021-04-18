<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title v-if="book.status === READING">読書中</ion-card-title>
      <ion-card-title v-if="book.status === READ">読了済</ion-card-title>
      <ion-card-title v-if="book.status === STOCK">ストック済</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div v-if="book.status === READING || book.status === READ">
        <app-datetime v-if="book.startDate" :datetime="book.startDate" /> 〜 <app-datetime v-if="book.endDate" :datetime="book.endDate" />
      </div>
      <div class="ion-margin-top">
        <book-regist-buttons
          @clickReading="onClickReading"
          @clickRead="onClickRead"
          @clickStock="openModal"
        />
      </div>
    </ion-card-content>
  </ion-card>
  <ion-modal
    :is-open="isOpenModal"
  >
    <edit-modal :book="book"
      @on-dismiss="closeModal"
      @on-submit="onSubmit"
    />
  </ion-modal>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonModal
} from '@ionic/vue'
import BookRegistButtons from '@/components/molecules/BookRegistButtons.vue'
import EditModal from '@/components/molecules/EditModal.vue'
import AppDatetime from '@/components/atoms/AppDatetime.vue'
import { defineComponent, PropType } from 'vue'
import { BookItem, READING, READ, STOCK } from '@/repositories/book'
import { useModal } from '@/composables/use-modal'

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonModal,
    BookRegistButtons,
    EditModal,
    AppDatetime
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  emits: {
    registAsReading: (id: string) => typeof id === 'string',
    registAsStock: (id: string) => typeof id === 'string',
    registAsRead: (id: string, payload: BookPayload) => {
      return !!(typeof id === 'string' && payload.startDate && payload.endDate)
    }
  },
  setup (props, { emit }) {
    const { isOpenModal, openModal, closeModal } = useModal()

    const onClickReading = () => {
      emit('registAsReading', props.book.id)
    }
    const onClickRead = () => {
      emit('registAsStock', props.book.id)
    }

    const onSubmit = (book: BookItem, payload: BookPayload) => {
      emit('registAsRead', book.id, payload)
    }

    return {
      isOpenModal,
      openModal,
      closeModal,
      onClickReading,
      onClickRead,
      onSubmit,
      READING,
      READ,
      STOCK
    }
  }
})
</script>

<style scoped>
.thumbnail {
  width: 232px;
}

.subtitle {
  font-size: 18px;
}
</style>
