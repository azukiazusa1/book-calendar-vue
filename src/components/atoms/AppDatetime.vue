<template>
  <time :datetime="datetime">
    {{ formatedDate }}
  </time>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  props: {
    datetime: {
      type: [String, Date],
      required: false,
      default: new Date()
    },
    format: {
      type: String,
      required: false,
      default: 'YYYY.MM.DD'
    }
  },
  setup (props) {
    const formatedDate = computed(() => {
      return dayjs(props.datetime).format(props.format)
    })

    return {
      formatedDate
    }
  }
})
</script>
