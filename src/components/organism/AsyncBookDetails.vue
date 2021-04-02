<template>
  <toolbar-widh-back-button defaultHref="/tabs/search">
    {{ book.title }}
  </toolbar-widh-back-button>
  <ion-content>
    <book-card :book="book" />
    読書中
  </ion-content>
</template>

<script lang="ts">
import { IonContent } from '@ionic/vue'
import ToolbarWidhBackButton from '@/components/molecules/ToolbarWidhBackButton.vue'
import BookCard from '@/components/molecules/BookCard.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { useBookStore } from '@/store/book'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonContent,
    BookCard,
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
      book
    }
  }
})
</script>
