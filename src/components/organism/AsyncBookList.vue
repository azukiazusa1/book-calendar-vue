<template>
  <ion-list>
    <book-item v-for="book in res.items" :key="book.id" :book="book" />
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
    const res = await useSearchBooks(props)
    return {
      res
    }
  }
})
</script>
