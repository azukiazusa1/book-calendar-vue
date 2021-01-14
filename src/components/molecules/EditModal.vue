<template>
            <ion-header translucent>
            <ion-toolbar>
              <ion-title>Modal Content</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="$emit('onDismiss')">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content fullscreen>
            <ion-list>
              <ion-item>
                  <h2>Gollum</h2>
                  <p>Sneaky little hobbitses!</p>
              </ion-item>
            </ion-list>
          </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem } from '@ionic/vue'
export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonList,
    IonItem
  },
  emits: {
    onDismiss: () => true
  }
})
</script>
