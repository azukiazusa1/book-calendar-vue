<template>
  <ion-list>
    <ion-list-header>
      <ion-label>{{ title }}</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>読み始めた日</ion-label>
      <ion-datetime display-format="YYYY/MM/DD"
        v-model="form.startDate.$value"
      />
    </ion-item>
    <ion-item>
      <ion-label>読み終わった日</ion-label>
      <ion-datetime display-format="YYYY/MM/DD"
        v-model="form.endDate.$value"
      />
    </ion-item>
    <ion-item>
      <ion-label position="floating">感想</ion-label>
      <ion-textarea
        v-model="form.comment.$value"
        rows="6"
        cols="20"
        placeholder="本を読み終えた感想、メモなどを入力しましょう！" />
    </ion-item>
      <div class="ion-margin-top">
        <ion-text v-if="form.startDate.$anyInvalid" color="danger">
          {{ form.startDate.$message }}
        </ion-text>
        <ion-text v-if="form.endDate.required.$invalid" color="danger">
          {{ form.endDate.required.$message }}
        </ion-text>
        <ion-text v-if="form.endDate.compare.$invalid" color="danger">
          {{ form.endDate.compare.$message }}
        </ion-text>
      </div>
    <ion-button
      class="ion-margin-top"
      expand="block"
      :disabled="form.$anyInvalid"
      @click="onSubmit"
    >
      登録
    </ion-button>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonButton, IonList, IonListHeader, IonItem, IonLabel, IonDatetime, IonTextarea, IonText } from '@ionic/vue'
import { useIntlDateTimeFormat, useValidation } from 'vue-composable'
import { BookPayload } from '@/repositories/book'

export default defineComponent({
  components: {
    IonButton,
    IonListHeader,
    IonList,
    IonItem,
    IonLabel,
    IonDatetime,
    IonTextarea,
    IonText
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
  emits: {
    onSubmit: (data: BookPayload) => {
      return data.startDate && data.endDate
    }
  },
  setup (props, { emit }) {
    const { formatString } = useIntlDateTimeFormat('ja')

    const form = useValidation({
      startDate: {
        $value: formatString(props.startDate),
        required: (value: string) => !!value,
        $message: '読み始めた日を入力してください。'
      },
      endDate: {
        $value: formatString(props.endDate),
        required: {
          $validator: (value: string) => !!value,
          $message: '読み終わった日を入力してください。'
        },
        compare: {
          $validator: (value: string, context: any) => {
            const startDate = new Date(context.startDate.$value)
            const endDate = new Date(value)
            return startDate.getTime() <= endDate.getTime()
          },
          $message: '読み終わった日は読み始めたよりも後の日付を入力してください。'
        }
      },
      comment: {
        $value: props.comment
      }
    })

    const onSubmit = () => {
      if (form.$anyInvalid) return
      emit('onSubmit', {
        startDate: new Date(form.startDate.$value),
        endDate: new Date(form.endDate.$value),
        comment: form.comment.$value
      })
    }

    return {
      form,
      onSubmit
    }
  }
})
</script>
