<template>
  <ion-avatar @click="onClick">
    <ion-img :src="user.photoURL" />
  </ion-avatar>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonAvatar, IonImg, menuController } from '@ionic/vue'
import { User } from '@/repositories/user'

export default defineComponent({
  components: {
    IonAvatar,
    IonImg
  },
  props: {
    user: {
      type: Object as PropType<User>,
      requierd: true
    }
  },
  setup () {
    const onClick = () => {
      console.log('onClick')
      menuController.enable(true, 'first')
      menuController.open('first')
    }
    return {
      onClick
    }
  }
})
</script>
