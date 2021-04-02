<template>
  <ion-card>
    <div class="ion-text-center">
      <img :src="thumbnail" class="thumbnail" />
    </div>
    <ion-card-header>
      <ion-card-subtitle class="subtitle">
        <div v-if="book.auhtors">{{ book.auhtors.join(',')}}</div>
        <div>{{ book.publishedDate }}</div>
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      {{ book.description }}
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle
} from '@ionic/vue'
import { useBookUtils } from '@/composables/use-bookUtils'
import { defineComponent, PropType } from 'vue'
import { BookItem } from '@/repositories/book'

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  async setup (props) {
    const { thumbnail } = useBookUtils()

    return {
      thumbnail: thumbnail(props.book, 'medium')
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
