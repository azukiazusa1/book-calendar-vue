<template>
  <div class="ion-text-center">
    <div class="ion-padding-top">
      <login-button provider="google" :icon="logoGoogle" />
    </div>
    <div class="ion-padding-top">
      <login-button provider="google" :icon="logoGoogle" />
    </div>
    <div class="ion-padding-top">
      <login-button provider="google" :icon="logoGoogle" />
    </div>
    <div class="ion-padding-top">
      <login-button provider="google" :icon="logoGoogle" />
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import LoginButton from '@/components/molecules/LoginButton.vue'
import { logoGoogle } from 'ionicons/icons'

export default defineComponent({
  components: {
    LoginButton
  },
  setup () {
    return {
      logoGoogle
    }
  }
})
</script>

<style scoped>
.ion-color-google {
  --ion-color-base: var(--ion-color-google) !important;
}
</style>
