<template>
  <ion-list>
    <ion-list-header>
      <ion-label>{{ title }}</ion-label>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonButton, IonList, IonListHeader, IonItem, IonLabel, IonDatetime, IonTextarea } from '@ionic/vue'

export default defineComponent({
  components: {
    IonButton,
    IonListHeader,
    IonList,
    IonItem,
    IonLabel,
    IonDatetime,
    IonTextarea
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
