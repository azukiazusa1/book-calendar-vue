<template>
  <ion-page>
      <button @click="logout" >ログアウト</button>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue'
import { useTitle } from 'vue-composable'
import { APP_TITLE } from '@/constant'

export default {
  name: 'Tab2',
  components: {
    IonPage
  },
  setup () {
    const title = useTitle()
    title.value = `本を探す | ${APP_TITLE}`
  }
}
</script>
