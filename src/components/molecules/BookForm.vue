<template>
  <ion-list>
    <ion-list-header>
      <ion-label>{{ title }}</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>読み始めた日</ion-label>
      <ion-datetime display-format="YYYY/MM/DD"
        v-model="data.startDate"
      />
    </ion-item>
    <ion-item>
      <ion-label>読み終わった日</ion-label>
      <ion-datetime display-format="YYYY/MM/DD"
        v-model="data.endDate"
      />
    </ion-item>
    <ion-item>
      <ion-label position="floating">感想</ion-label>
      <ion-textarea
        v-model="data.comment"
        rows="6"
        cols="20"
        placeholder="本を読み終えた感想、メモなどを入力しましょう！" />
    </ion-item>
    <ion-button
      class="ion-margin-top"
      expand="block"
      @click="onSubmit"
    >
      登録
    </ion-button>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { IonButton, IonList, IonListHeader, IonItem, IonLabel, IonDatetime, IonTextarea } from '@ionic/vue'
import { useIntlDateTimeFormat } from 'vue-composable'

type Data = {
  startDate: string;
  endDate: string;
  comment: string;
}

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
    },
    startDate: {
      type: [Date, String],
      required: false,
      default: new Date()
    },
    endDate: {
      type: [Date, String],
      required: false,
      default: new Date()
    },
    comment: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (props) {
    const { formatString } = useIntlDateTimeFormat('ja')

    const data = reactive<Data>({
      startDate: formatString(props.startDate),
      endDate: formatString(props.endDate),
      comment: props.comment
    })

    const onSubmit = () => {
      console.log(data)
    }

    return {
      data,
      onSubmit
    }
  }
})
</script>
