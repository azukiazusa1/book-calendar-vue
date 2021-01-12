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
          @click="clickRegistAsReading(book)"
        >
          読書開始
        </ion-button>
        <ion-button class="button ion-margin-end" size="small" color="tertiary">読了</ion-button>
        <ion-button class="button ion-margin-end" size="small" color="success">ストック</ion-button>
      </div>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonImg, IonLabel, IonBadge, IonButton } from '@ionic/vue'
import { computed, defineComponent, PropType } from 'vue'
import { BookItem, READING } from '@/repositories/book'
import { useBookStore } from '@/store/book'

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
  setup (props) {
    const bookStore = useBookStore()
    const thumbnail = computed(() => {
      return props.book.imageLinks?.smallThumbnail ?? '/assets/icon/no-image.png'
    })

    const clickRegistAsReading = (book: BookItem) => {
      bookStore.registAsReading(book)
    }
    return {
      thumbnail,
      clickRegistAsReading,
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
