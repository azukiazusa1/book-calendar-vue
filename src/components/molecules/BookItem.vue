<template>
  <ion-item class="ion-padding-vertical">
    <ion-img
      slot="start"
      class="tuhmbnail"
      :src="thumbnail"
    />
    <ion-label>
      <h2>
        <router-link :to="`/books/${book.id}`">
          {{ book.title }}
        </router-link>
      </h2>
      <h3 v-if="book.auhtors">{{ book.auhtors.join(',') }}</h3>
      <p>{{ description }}</p>
      <ion-badge v-if="book.status === READING" class="ion-margin-top">読書中!</ion-badge>
      <ion-badge v-if="book.status === READ" class="ion-margin-top">読了済!</ion-badge>
      <ion-badge v-if="book.status === STOCK" class="ion-margin-top">ストック済!</ion-badge>
      <div class="ion-margin-top">
        <book-regist-buttons
          @clickReading="clickRegistAsReading"
          @clickRead="openModal"
          @clickStock="clickRegistAsStock"
        />
      </div>
    </ion-label>
  </ion-item>
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
import { IonItem, IonImg, IonLabel, IonBadge, IonModal } from '@ionic/vue'
import EditModal from '@/components/molecules/EditModal.vue'
import BookRegistButtons from '@/components/molecules/BookRegistButtons.vue'
import { defineComponent, PropType } from 'vue'
import { useBookUtils } from '@/composables/use-bookUtils'
import { useModal } from '@/composables/use-modal'
import { BookItem, READING, READ, STOCK, BookPayload } from '@/repositories/book'

export default defineComponent({
  components: {
    IonItem,
    IonImg,
    IonLabel,
    IonBadge,
    IonModal,
    EditModal,
    BookRegistButtons
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  emits: {
    registAsReading: (id: string) => {
      return !!id
    },
    registAsStock: (id: string) => {
      return !!id
    },
    registAsRead: (id: string, payload: BookPayload) => {
      return !!(id && payload.startDate && payload.endDate)
    }
  },
  setup (props, { emit }) {
    const { thumbnail, striptTagsDescription } = useBookUtils()
    const { isOpenModal, openModal, closeModal } = useModal()

    const clickRegistAsReading = () => {
      emit('registAsReading', props.book.id)
    }
    const clickRegistAsStock = () => {
      emit('registAsStock', props.book.id)
    }

    const onSubmit = (book: BookItem, payload: BookPayload) => {
      emit('registAsRead', book.id, payload)
    }

    return {
      thumbnail: thumbnail(props.book, 'small'),
      description: striptTagsDescription(props.book),
      isOpenModal,
      closeModal,
      openModal,
      clickRegistAsReading,
      clickRegistAsStock,
      onSubmit,
      READING,
      READ,
      STOCK
    }
  }
})
</script>

<style scoped>
.tuhmbnail {
  width: 80px;
}

.button {
  width: 60px;
}
</style>
