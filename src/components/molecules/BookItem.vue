<template>
  <ion-item class="ion-padding-vertical">
      <ion-img
        slot="start"
        class="tuhmbnail"
        :src="thumbnail"
      />
    <ion-label>
      <h2>{{ book.title }}</h2>
      <h3 v-if="book.auhtors">{{ book.auhtors[0] }}</h3>
      <p>{{ book.description }}</p>
      <ion-badge v-if="book.status === READING" class="ion-margin-top">読書中!</ion-badge>
      <ion-badge v-if="book.status === READ" class="ion-margin-top">読了済!</ion-badge>
      <ion-badge v-if="book.status === STOCK" class="ion-margin-top">ストック済!</ion-badge>
      <div class="ion-margin-top">
        <ion-button
          class="button ion-margin-end"
          size="small"
          color="secondary"
          @click="clickRegistAsReading"
        >
          読書開始
        </ion-button>
        <ion-button
          class="button ion-margin-end"
          size="small"
          color="tertiary"
          @click="clickRegistAsRead"
        >
          読了
        </ion-button>
        <ion-button
          class="button ion-margin-end"
          size="small"
          color="success"
          @click="clickRegistAsStock"
        >
          ストック
        </ion-button>
      </div>
    </ion-label>
  </ion-item>
  <ion-modal
    :is-open="isOpenModal"
  >
    <edit-modal @onDismiss="closeModal" />
  </ion-modal>
</template>

<script lang="ts">
import { IonItem, IonImg, IonLabel, IonBadge, IonButton, IonModal } from '@ionic/vue'
import EditModal from '@/components/molecules/EditModal.vue'
import { computed, defineComponent, PropType } from 'vue'
import { useModal } from '@/composables/use-modal'
import { BookItem, READING, READ, STOCK } from '@/repositories/book'

export default defineComponent({
  components: {
    IonItem,
    IonImg,
    IonLabel,
    IonBadge,
    IonButton,
    IonModal,
    EditModal
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  emits: [
    'clickRegistAsReading',
    'clickRegistAsRead',
    'clickRegistAsStock'
  ],
  setup (props, { emit }) {
    const thumbnail = computed(() => {
      return props.book.imageLinks?.smallThumbnail ?? '/assets/icon/no-image.png'
    })

    const { isOpenModal, openModal, closeModal } = useModal()

    const clickRegistAsReading = () => {
      emit('clickRegistAsReading', props.book)
    }
    const clickRegistAsRead = () => {
      openModal()
    }
    const clickRegistAsStock = () => {
      emit('clickRegistAsStock', props.book)
    }
    return {
      thumbnail,
      isOpenModal,
      closeModal,
      clickRegistAsReading,
      clickRegistAsRead,
      clickRegistAsStock,
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
