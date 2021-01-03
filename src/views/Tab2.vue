<template>
  <ion-page>
    <ion-searchbar animated placeholder="題名・著者・ISBN" />
    <Suspense>
      <async-book-list />
    </Suspense>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonSearchbar } from '@ionic/vue'
import AsyncBookList from '@/components/organism/AsyncBookList.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'

export default {
  name: 'Tab2',
  components: {
    IonPage,
    IonSearchbar,
    AsyncBookList
  },
  setup () {
    const title = useTitle()
    title.value = `本を探す | ${APP_TITLE}`
  }
}
</script>
