<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-title>読んだ本として登録</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="$emit('onDismiss')">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-list>
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
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonDatetime, IonTextarea } from '@ionic/vue'
export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonDatetime,
    IonTextarea
  },
  emits: {
    onDismiss: () => true
  }
})
</script>
