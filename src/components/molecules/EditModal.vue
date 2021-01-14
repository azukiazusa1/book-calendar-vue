<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>読んだ本として登録</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="$emit('onDismiss')">キャンセル</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-list>
      <ion-list-header>
    <ion-label>{{ book.title }}</ion-label>
  </ion-list-header>
      <ion-item>
        <ion-label>読み始めた日</ion-label>
        <ion-datetime display-format="YYYY/MM/DD" value="2012-12-15T13:47:20.789"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>読み終わった日</ion-label>
        <ion-datetime display-format="YYYY/MM/DD" value="2012-12-15T13:47:20.789"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="floating">感想</ion-label>
        <ion-textarea rows="6" cols="20" placeholder="本を読み終えた感想、メモなどを入力しましょう！"></ion-textarea>
      </ion-item>
      <ion-button class="ion-margin-top" expand="block">登録</ion-button>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonDatetime, IonTextarea } from '@ionic/vue'
import { BookItem } from '@/repositories/book'
export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonListHeader,
    IonList,
    IonItem,
    IonLabel,
    IonDatetime,
    IonTextarea
  },
  props: {
    book: {
      type: Object as PropType<BookItem>,
      required: true
    }
  },
  emits: {
    onDismiss: () => true
  }
})
</script>
