<template>
  <ion-page>
    <search-area
      v-model:q="q"
      v-model:orderBy="orderBy"
      @finishInput="set"
    />
    <ion-content>
      <error-toast :is-open="err" />
      <async-book-list v-if="q" :q="q" :orderBy="orderBy" />
      <search-history
        v-else
        :search-words="storage"
        @clickSearchWord="setQ"
        @clickClear="clear"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import AsyncBookList from '@/components/organism/AsyncBookList.vue'
import SearchArea from '@/components/molecules/SearchArea.vue'
import ErrorToast from '@/components/atoms/ErrorToast.vue'
import SearchHistory from '@/components/molecules/SearchHistory.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { defineComponent, ref, onErrorCaptured } from 'vue'
import { useSearchParams } from '@/composables/use-searchBooks'
import { useStorage } from '@/composables/use-storage'

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    SearchArea,
    ErrorToast,
    AsyncBookList,
    SearchHistory
  },
  setup () {
    const title = useTitle()
    title.value = `本を探す | ${APP_TITLE}`
    const { q, orderBy, setQ } = useSearchParams()
    const { storage, set, clear } = useStorage()

    const err = ref<boolean>(false)

    onErrorCaptured(e => {
      err.value = !!e
      return true
    })

    return {
      q,
      orderBy,
      setQ,
      err,
      storage,
      set,
      clear
    }
  }
})
</script>
