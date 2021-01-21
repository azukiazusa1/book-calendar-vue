<template>
  <ion-page>
    <search-area
      v-model:q="q"
      v-model:orderBy="orderBy"
    />
    <ion-content>
      <error-toast :is-open="err" />
      <Suspense v-if="q">
        <template #default>
          <async-book-list :q="q" :orderBy="orderBy" />
        </template>
        <template #fallback>
          <skelton-list />
        </template>
      </Suspense>
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
import SkeltonList from '@/components/molecules/SkeltonList.vue'
import SearchHistory from '@/components/molecules/SearchHistory.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { defineComponent, ref, onErrorCaptured } from 'vue'
import { q, orderBy, setQ } from '@/composables/use-searchBooks'
import { useStorage } from '@/composables/use-storage'

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    SearchArea,
    ErrorToast,
    AsyncBookList,
    SkeltonList,
    SearchHistory
  },
  setup () {
    const title = useTitle()
    title.value = `本を探す | ${APP_TITLE}`
    const { storage, clear } = useStorage()

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
      clear
    }
  }
})
</script>
