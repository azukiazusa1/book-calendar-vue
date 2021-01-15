<template>
  <ion-searchbar
    animated
    placeholder="題名・著者・ISBN"
    v-model="_q"
  />
  <ion-segment v-model="_orderBy">
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
import { useVModel } from 'vue-composable'

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
  setup (props) {
    const _q = useVModel(props, 'q')
    const _orderBy = useVModel(props, 'orderBy')
    return {
      _q,
      _orderBy,
      RELEVANCE,
      NEWEST
    }
  }
})
</script>
