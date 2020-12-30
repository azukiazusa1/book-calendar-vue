<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <button @click="login" >ログイン</button>
      <button @click="logout" >ログアウト</button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
import { AuthRepository } from '@/repositories/auth/AuthRepository'
import db from '@/plugins/db'
const usersRef = db.collection('users')

export default {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup () {
    const a = new AuthRepository()

    const login = async () => {
      const user = await a.signInWithGoogle()
      if (!user) {
        throw new Error()
      }
      return usersRef.doc(user.uid).set({
        displayName: user.displayName,
        photoUrl: user.photoURL
      })
    }
    const logout = a.logout

    return {
      login,
      logout
    }
  }
}
</script>
