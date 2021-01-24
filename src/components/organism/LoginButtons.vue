<template>
  <div class="ion-text-center">
    <div class="ion-padding-top">
      <login-button provider="google" :icon="logoGoogle" @click="clickGoogle"/>
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
import { useRouter } from 'vue-router'
import LoginButton from '@/components/molecules/LoginButton.vue'
import { logoGoogle } from 'ionicons/icons'
import { useAuth } from '@/composables/use-auth'
import { useUserStore } from '@/store/user'

export default defineComponent({
  components: {
    LoginButton
  },
  setup () {
    const userStore = useUserStore()
    const router = useRouter()
    const { signInWithGoogle } = useAuth()

    const clickGoogle = async () => {
      const user = await signInWithGoogle()
      if (!user) return

      userStore.findOrCreate(user)
      router.push('/tabs/tazb1')
    }
    return {
      clickGoogle,
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
