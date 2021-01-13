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
</template>

<script lang="ts">
import { IonItem, IonImg, IonLabel, IonBadge, IonButton } from '@ionic/vue'
import { computed, defineComponent, PropType } from 'vue'
import { BookItem, READING } from '@/repositories/book'

export default defineComponent({
  components: {
    IonItem,
    IonImg,
    IonLabel,
    IonBadge,
    IonButton
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

    const clickRegistAsReading = () => {
      emit('clickRegistAsReading', props.book)
    }
    const clickRegistAsRead = () => {
      emit('clickRegistAsRead', props.book)
    }
    const clickRegistAsStock = () => {
      emit('clickRegistAsStock', props.book)
    }
    return {
      thumbnail,
      clickRegistAsReading,
      clickRegistAsRead,
      clickRegistAsStock,
      READING
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
