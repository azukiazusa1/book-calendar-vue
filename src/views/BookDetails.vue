<template>
  <ion-page>
    <Suspense>
      <template #default>
        <async-book-details :id="id" />
      </template>
      <template #fallback>
        <loading-book-details />
      </template>
    </Suspense>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import AsyncBookDetails from '@/components/organism/AsyncBookDetails.vue'
import LoadingBookDetails from '@/components/organism/LoadingBookDetails.vue'

export default defineComponent({
  components: {
    IonPage,
    AsyncBookDetails,
    LoadingBookDetails
  },
  setup () {
    const route = useRoute()
    const id = route.params.id as string

    return {
      id
    }
  }
})
</script>
