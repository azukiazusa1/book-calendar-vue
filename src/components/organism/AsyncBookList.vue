<template>
  <skelton-list v-if="loading" />
  <ion-list v-else>
    <div v-if="empty">
      検索結果が見つかりませんでした。
    </div>
    <book-item
      v-else
      v-for="book in state.books"
      :key="book.id"
      :book="book"
      @RegistAsReading="registAsReading"
      @RegistAsRead="registAsRead"
      @RegistAsStock="registAsStock"
    />
     <ion-infinite-scroll
        @ionInfinite="nextPage($event)"
        :disabled="isFinished || loading"
      >
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
  </ion-list>
</template>

<script lang="ts">
import { IonList, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue'
import BookItem from '@/components/molecules/BookItem.vue'
import SkeltonList from '@/components/molecules/SkeltonList.vue'
import { defineComponent, toRefs } from 'vue'
import { useSearchBooks } from '@/composables/use-searchBooks'
import { useBookStore } from '@/store/book'
import { useSearchStatus } from '@/composables/use-searchStatus'

export default defineComponent({
  components: {
    IonList,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    BookItem,
    SkeltonList
  },
  setup () {
    const { state, setBooks, addBooks, registAsReading, registAsRead, registAsStock } = useBookStore()
    const { result, nextPage, loading } = useSearchBooks(setBooks, addBooks)
    const { books } = toRefs(state)
    const { empty, isFinished } = useSearchStatus(result, books)
    return {
      state,
      result,
      empty,
      nextPage,
      loading,
      isFinished,
      registAsReading,
      registAsRead,
      registAsStock
    }
  }
})
</script>
