<template>
  <skelton-list v-if="loading" />
  <ion-list v-else>
    <div v-if="empty">
      検索結果が見つかりませんでした。
    </div>
    <book-item
      v-else
      v-for="book in result.items"
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
import { defineComponent } from 'vue'
import { useSearchBooks } from '@/composables/use-searchBooks'
import { useBookStore } from '@/store/book'

export default defineComponent({
  components: {
    IonList,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    BookItem,
    SkeltonList
  },
  setup () {
    const { registAsReading, registAsRead, registAsStock } = useBookStore()
    const { result, empty, nextPage, loading, isFinished } = useSearchBooks()
    return {
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
