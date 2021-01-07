<template>
  <ion-page>
    <ion-content>
    <ion-searchbar animated placeholder="題名・著者・ISBN" v-model="q" />
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
import { IonPage, IonContent, IonSearchbar } from '@ionic/vue'
import AsyncBookList from '@/components/organism/AsyncBookList.vue'
import SkeltonList from '@/components/molecules/SkeltonList.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonSearchbar,
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
