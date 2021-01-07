<template>
  <ion-list id="skeleton">
    <ion-item v-for="n in 10" :key="n">
      <ion-thumbnail slot="start">
        <ion-skeleton-text></ion-skeleton-text>
      </ion-thumbnail>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import {
  IonItem,
  IonLabel,
  IonList,
  IonSkeletonText,
  IonThumbnail
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonSkeletonText,
    IonThumbnail
  }
})
</script>
