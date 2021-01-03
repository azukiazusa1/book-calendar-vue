<template>
  <h1>{{ res.data }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import 'firebase/functions'
import firebase from '@/plugins/firebase'

export default defineComponent({
  props: {
    q: {
      type: String,
      required: true
    }
  },
  async setup (props) {
    const functions = firebase.functions()
    functions.useFunctionsEmulator('http://localhost:5001')
    const func = functions.httpsCallable('books')
    const res = ref<any>(null)
    watchEffect(async () => {
      const r = await func({
        q: props.q
      })
      res.value = r
    })
    const r = await func({
      q: props.q
    })
    res.value = r
    return {
      res
    }
  }
})
</script>
