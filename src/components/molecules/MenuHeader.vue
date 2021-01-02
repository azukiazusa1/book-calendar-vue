<template>
  <ion-list-header class="ion-padding">
    <ion-item>
      <user-avatar slot="start" :user="user" />
      <ion-label>{{ user.displayName }}</ion-label>
    </ion-item>
  </ion-list-header>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IonListHeader, IonItem, IonLabel } from '@ionic/vue'
import UserAvatar from '@/components/atoms/UserAvatar.vue'
import { User } from '@/repositories/user'

export default defineComponent({
  components: {
    UserAvatar,
    IonListHeader,
    IonItem,
    IonLabel
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  }
})
</script>
