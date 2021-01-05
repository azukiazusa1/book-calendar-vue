<template>
  <ion-item class="ion-padding-vertical">
      <ion-img
        slot="start"
        class="tuhmbnail"
        v-if="book.imageLinks"
        :src="book.imageLinks.smallThumbnail"
         />
    <ion-label>
      <h2>{{ book.title }}</h2>
      <h3 v-if="book.auhtors">{{ book.auhtors[0] }}</h3>
      <p>{{ book.description }}</p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonImg, IonLabel } from '@ionic/vue'
import { defineComponent, PropType } from 'vue'
import { BookItem } from '@/repositories/book'

export default defineComponent({
  components: {
    IonItem,
    IonImg,
    IonLabel
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  setup (props) {
    console.log(props.book)
  }
})
</script>

<style scoped>
.tuhmbnail {
  width: 80px;
  height: 80%;
}
</style>
