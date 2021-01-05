<template>
  <ion-page>
    <ion-content>
    <ion-searchbar animated placeholder="題名・著者・ISBN" v-model="q" />
    <Suspense v-if="q">
      <async-book-list :q="q" />
    </Suspense>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonSearchbar } from '@ionic/vue'
import AsyncBookList from '@/components/organism/AsyncBookList.vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Tab2',
  components: {
    IonPage,
    IonContent,
    IonSearchbar,
    AsyncBookList
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
