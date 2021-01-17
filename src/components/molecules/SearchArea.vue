<template>
  <ion-searchbar
    animated
    placeholder="題名・著者・ISBN"
    v-model="myQ"
  />
  <ion-segment v-model="myOrderBy">
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
    const myQ = useVModel(props, 'q')
    const myOrderBy = useVModel(props, 'orderBy')
    return {
      myQ,
      myOrderBy,
      RELEVANCE,
      NEWEST
    }
  }
})
</script>
