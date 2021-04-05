<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title v-if="book.status === READING">読書中</ion-card-title>
      <ion-card-title v-if="book.status === READ">読了済</ion-card-title>
      <ion-card-title v-if="book.status === STOCK">ストック済</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div v-if="book.status === READING || book.status === READ">
        <app-datetime v-if="book.startDate" :datetime="book.startDate" /> 〜 <app-datetime v-if="book.endDate" :datetime="book.endDate" />
      </div>
      <div class="ion-margin-top">
        <book-regist-buttons
          @clickReading="clickRegistAsReading"
          @clickRead="openModal"
          @clickStock="clickRegistAsStock"
        />
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'
import BookRegistButtons from '@/components/molecules/BookRegistButtons.vue'
import AppDatetime from '@/components/atoms/AppDatetime.vue'
import { defineComponent, PropType } from 'vue'
import { BookItem, READING, READ, STOCK } from '@/repositories/book'

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    BookRegistButtons,
    AppDatetime
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  async setup () {
    return {
      READING,
      READ,
      STOCK
    }
  }
})
</script>

<style scoped>
.thumbnail {
  width: 232px;
}

.subtitle {
  font-size: 18px;
}
</style>
