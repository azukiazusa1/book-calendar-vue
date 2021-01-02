import firebase from '@/plugins/firebase'
import f from 'firebase'
import 'firebase/auth'

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  const { user } = await firebase.auth().signInWithPopup(provider)
  return user
}

export const logout = () => {
  return firebase.auth().signOut()
}

export const auth = () => {
  return new Promise<f.User | null>(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user)
    })
  })
}
