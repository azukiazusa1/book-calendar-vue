<template>
  <div class="ion-text-center">
    <div class="ion-padding-top">
      <login-button provider="google" :icon="logoGoogle" @click="signWithGoogle"/>
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
import RepositoryFactory, { AUTH } from '@/repositories/RepositoryFactory'
import { useUserStore } from '@/store/user'

const AuthRepository = RepositoryFactory[AUTH]

export default defineComponent({
  components: {
    LoginButton
  },
  setup () {
    const userStore = useUserStore()
    const router = useRouter()

    const signWithGoogle = async () => {
      const user = await AuthRepository.signInWithGoogle()
      if (!user) return

      userStore.setUser(user)
      router.push('/tabs/tab1')
    }
    return {
      signWithGoogle,
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
