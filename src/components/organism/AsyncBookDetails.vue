<template>
  <toolbar-widh-back-button defaultHref="/tabs/search">
    {{ book.title }}
  </toolbar-widh-back-button>
  <ion-content>
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
  </ion-content>
</template>

<script lang="ts">
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle
} from '@ionic/vue'
import ToolbarWidhBackButton from '@/components/molecules/ToolbarWidhBackButton.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { useBookStore } from '@/store/book'
import { useBookUtils } from '@/composables/use-bookUtils'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    ToolbarWidhBackButton
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async setup (props) {
    const bookStore = useBookStore()
    const { thumbnail } = useBookUtils()
    const title = useTitle()

    if (!bookStore.hasBook(props.id)) {
      await bookStore.findById(props.id)
    }

    const book = bookStore.getBook(props.id)
    if (!book) {
      throw new Error('not found')
    }
    title.value = `${book.title} | ${APP_TITLE}`

    return {
      book,
      thumbnail: thumbnail(book, 'medium')
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
