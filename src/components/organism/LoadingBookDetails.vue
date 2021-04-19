<template>
  <toolbar-widh-back-button defaultHref="/tabs/search">
  </toolbar-widh-back-button>
  <ion-content>
  <ion-card>
    <ion-skeleton-text class="thumbnail" animated />
    <ion-card-header>
      <ion-card-subtitle>
        <ion-skeleton-text animated class="subtitle" />
        <ion-skeleton-text animated class="subtitle" />
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="ion-margin-vertical">
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
      <ion-skeleton-text animated />
    </ion-card-content>
  </ion-card>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonSkeletonText,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle
} from '@ionic/vue'
import ToolbarWidhBackButton from '@/components/molecules/ToolbarWidhBackButton.vue'

export default defineComponent({
  components: {
    IonSkeletonText,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    ToolbarWidhBackButton
  }
})
</script>

<style scoped>
.thumbnail {
  margin: 0 auto;
  width: 232px;
  height: 233px;
}

.subtitle {
  width: 80%;
  height: 22px;
}
</style>
