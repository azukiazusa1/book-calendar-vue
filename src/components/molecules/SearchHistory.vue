<template>
  <ion-list>
    <search-history-word v-for="(word, i) in searchWords" :key="i" :word="word" />
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonList } from '@ionic/vue'
import SearchHistoryWord from '@/components/atoms/SearchHistoryWord.vue'

export default defineComponent({
  components: {
    IonList,
    SearchHistoryWord
  },
  props: {
    searchWords: {
      type: Array,
      required: true
    }
  }
})
</script>
