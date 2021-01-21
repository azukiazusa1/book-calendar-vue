<template>
  <ion-list-header>
    <ion-label>最近の検索</ion-label>
    <ion-button @click="onClickClear">
      消去
    </ion-button>
  </ion-list-header>
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
import { IonListHeader, IonLabel, IonButton, IonList } from '@ionic/vue'
import { isString } from 'vue-composable'
import SearchHistoryWord from '@/components/atoms/SearchHistoryWord.vue'

export default defineComponent({
  components: {
    IonListHeader,
    IonLabel,
    IonButton,
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
    },
    onClickClear: () => true
  },
  setup (_, { emit }) {
    const onClick = (word: string) => {
      console.log('emit:onClickWord', word)
      emit('clieckSearchWord', word)
    }

    const onClickClear = () => {
      console.log('emit:onClickClear')
      emit('onClickClear')
    }

    return {
      onClick,
      onClickClear
    }
  }
})
</script>
