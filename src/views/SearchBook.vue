<template>
  <ion-page>
    <ion-content>
      <search-area
        v-model:q="q"
        v-model:orderBy="orderBy"
      />
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
import SkeltonList from '@/components/molecules/SkeltonList.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { defineComponent } from 'vue'
import { q, orderBy } from '@/composables/use-searchBooks'

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    SearchArea,
    AsyncBookList,
    SkeltonList
  },
  setup () {
    const title = useTitle()
    title.value = `本を探す | ${APP_TITLE}`

    return {
      q,
      orderBy
    }
  }
})
</script>
