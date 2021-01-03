<template>
  <h1>{{ res.data}}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'firebase/functions'
import firebase from '@/plugins/firebase'

export default defineComponent({
  async setup () {
    const functions = firebase.functions()
    functions.useFunctionsEmulator('http://localhost:5001')
    const func = functions.httpsCallable('books')
    const res = await func({})
    console.log(res)
    console.log(functions)

    return {
      res
    }
  }
})
</script>
