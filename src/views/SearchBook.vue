<template>
  <ion-page>
    <ion-content>
      <search-area
        v-model:q="q"
        v-model:orderBy="orderBy"
      />
      <error-toast :is-open="err" />
      <Suspense v-if="q">
        <template #default>
          <async-book-list :q="q" :orderBy="orderBy" />
        </template>
        <template #fallback>
          <skelton-list />
        </template>
      </Suspense>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import AsyncBookList from '@/components/organism/AsyncBookList.vue'
import SearchArea from '@/components/molecules/SearchArea.vue'
import ErrorToast from '@/components/atoms/ErrorToast.vue'
import SkeltonList from '@/components/molecules/SkeltonList.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { defineComponent, ref, onErrorCaptured } from 'vue'
import { q, orderBy } from '@/composables/use-searchBooks'

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    SearchArea,
    ErrorToast,
    AsyncBookList,
    SkeltonList
  },
  setup () {
    const title = useTitle()
    title.value = `本を探す | ${APP_TITLE}`

    const err = ref<boolean>(false)

    onErrorCaptured(e => {
      err.value = !!e
      return true
    })

    return {
      q,
      orderBy,
      err
    }
  }
})
</script>
