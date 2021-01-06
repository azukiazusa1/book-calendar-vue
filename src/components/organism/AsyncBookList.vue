<template>
  <ion-list>
    <div v-if="empty">
      検索結果が見つかりませんでした。
    </div>
    <book-item v-else v-for="book in result.items" :key="book.id" :book="book" />
  </ion-list>
</template>

<script lang="ts">
import { IonList } from '@ionic/vue'
import BookItem from '@/components/molecules/BookItem.vue'
import { defineComponent } from 'vue'
import { useSearchBooks } from '@/composables/use-searchBooks'

export default defineComponent({
  components: {
    IonList,
    BookItem
  },
  props: {
    q: {
      type: String,
      required: true
    }
  },
  async setup (props) {
    const { result, empty } = await useSearchBooks(props)
    return {
      result,
      empty
    }
  }
})
</script>
