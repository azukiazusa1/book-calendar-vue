<template>
  <login-buttons />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginButtons from '@/components//organism/LoginButtons.vue'

export default defineComponent({
  components: {
    LoginButtons
  }

})
</script>
