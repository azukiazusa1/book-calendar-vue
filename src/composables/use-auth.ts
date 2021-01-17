import firebase from '@/plugins/firebase'
import f from 'firebase'
import 'firebase/auth'

/**
 * Googleアカウントによるログインを実行します。
 * @returns ログインユーザー or null
 */
export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  const { user } = await firebase.auth().signInWithPopup(provider)
  return user
}

/**
 * ログアウトを実行します。
 */
export const logout = () => {
  return firebase.auth().signOut()
}

/**
 * 現在ログインしているならユーザーをそうでないならnullを返します。
 * @returns ログインユーザー or null
 */
export const auth = () => {
  return new Promise<f.User | null>(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user)
    })
  })
}

export const useAuth = () => {
  return {
    signInWithGoogle,
    logout,
    auth
  }
}
