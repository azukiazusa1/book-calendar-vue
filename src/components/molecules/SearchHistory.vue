<template>
  <ion-list>
    <search-history-word
      v-for="(word, i) in searchWords"
      :key="i"
      :word="word"
      @click="onClick(word)" />
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonList } from '@ionic/vue'
import { isString } from 'vue-composable'
import SearchHistoryWord from '@/components/atoms/SearchHistoryWord.vue'

export default defineComponent({
  components: {
    IonList,
    SearchHistoryWord
  },
  props: {
    searchWords: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  emits: {
    clieckSearchWord: (word: string) => {
      return isString(word)
    }
  },
  setup (_, { emit }) {
    const onClick = (word: string) => {
      console.log(word)
      emit('clieckSearchWord', word)
    }

    return {
      onClick
    }
  }
})
</script>
