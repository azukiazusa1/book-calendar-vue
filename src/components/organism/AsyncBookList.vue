<template>
  <h1>{{ res }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSearchBooks } from '@/composables/use-searchBooks'

export default defineComponent({
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
