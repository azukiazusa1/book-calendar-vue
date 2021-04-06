<template>
  <toolbar-widh-back-button defaultHref="/tabs/search">
    {{ book.title }}
  </toolbar-widh-back-button>
  <ion-content>
    <book-card :book="book" />
    <book-details-status :book="book" />
    <book-details-comment :book="book" @updateComment="onUpdateComment" />
  </ion-content>
</template>

<script lang="ts">
import { IonContent } from '@ionic/vue'
import ToolbarWidhBackButton from '@/components/molecules/ToolbarWidhBackButton.vue'
import BookCard from '@/components/molecules/BookCard.vue'
import BookDetailsStatus from '@/components/molecules/BookDetailsStatus.vue'
import BookDetailsComment from '@/components/molecules/BookDetailsComment.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { useBookStore } from '@/store/book'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonContent,
    BookCard,
    BookDetailsStatus,
    BookDetailsComment,
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

    const onUpdateComment = (comment: string) => {
      bookStore.update(book.id, {
        comment,
        startDate: book.startDate ?? new Date(),
        endDate: book.endDate ?? new Date()
      })
    }

    return {
      book,
      onUpdateComment
    }
  }
})
</script>
