<template>
  <ion-searchbar
    animated
    placeholder="題名・著者・ISBN"
    :value="q"
    @input="$emit('update:q', $event.target.value)"
  />
  <ion-segment :value="orderBy"
    @ionChange="$emit('update:orderBy',($event.detail.value))"
  >
    <ion-segment-button :value="RELEVANCE">
      <ion-label>関連度順</ion-label>
    </ion-segment-button>
    <ion-segment-button :value="NEWEST">
      <ion-label>発売日順</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonSearchbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue'
import { RELEVANCE, NEWEST, OrderBy } from '@/repositories/book'

export default defineComponent({
  components: {
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonLabel
  },
  props: {
    q: {
      type: String,
      required: true
    },
    orderBy: {
      type: String as PropType<OrderBy>,
      required: true
    }
  },
  setup () {
    return {
      RELEVANCE,
      NEWEST
    }
  }
})
</script>
