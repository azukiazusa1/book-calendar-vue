<template>
  <ion-page>
    {{ book.title }}
  </ion-page>
</template>

<script lang="ts">
import { useBookStore } from '@/store/book'
import { IonPage } from '@ionic/vue'
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    IonPage
  },
  setup () {
    const route = useRoute()
    const bookStore = useBookStore()
    const id = route.params.id as string

    onMounted(async () => {
      if (!bookStore.hasBook(id)) {
        await bookStore.findById(id)
      }
    })

    return {
      id,
      book: bookStore.getBook(id)
    }
  }
})
</script>
