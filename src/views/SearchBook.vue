<template>
  <ion-page>
    <ion-content>
      <search-area v-model:q="q" />
      <Suspense v-if="q">
        <template #default>
          <async-book-list :q="q" />
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
import { defineComponent, ref } from 'vue'

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

    const q = ref('')

    return {
      q
    }
  }
})
</script>
