<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-searchbar
        animated
        placeholder="題名・著者・ISBN"
        v-model="myQ"
        @ionBlur="onBlur"
      />
    </ion-toolbar>
    <ion-toolbar>
      <ion-segment v-model="myOrderBy">
        <ion-segment-button :value="RELEVANCE">
          <ion-label>関連度順</ion-label>
        </ion-segment-button>
        <ion-segment-button :value="NEWEST">
          <ion-label>発売日順</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonHeader, IonToolbar, IonSearchbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue'
import { RELEVANCE, NEWEST, OrderBy } from '@/repositories/book'
import { useVModel } from 'vue-composable'

export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
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
  emits: {
    finishInput: (value: string) => !!value
  },
  setup (props, { emit }) {
    const myQ = useVModel(props, 'q')
    const myOrderBy = useVModel(props, 'orderBy')

    const onBlur = (e: { target: HTMLInputElement}) => {
      console.log('onBlur searchbar', e.target.value)
      if (!e.target.value) return
      emit('finishInput', e.target.value)
    }
    return {
      myQ,
      myOrderBy,
      onBlur,
      RELEVANCE,
      NEWEST
    }
  }
})
</script>
