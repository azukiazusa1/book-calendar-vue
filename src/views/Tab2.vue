<template>
  <ion-page>
    <Suspense>
      <async-book-list />
    </Suspense>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'
import AsyncBookList from '@/components/organism/AsyncBookList.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'

export default {
  name: 'Tab2',
  components: {
    IonPage,
    AsyncBookList
  },
  setup () {
    const title = useTitle()
    title.value = `本を探す | ${APP_TITLE}`
  }
}
</script>
