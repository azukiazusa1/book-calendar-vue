import { AuthRepositoryInterface } from './types'
import firebase from 'firebase'

const user = {
  uid: 'uid',
  displayName: 'test',
  photoURL: 'testPhoto',
  email: 'test@example.com'
} as firebase.User

export class MockAuthRepository implements AuthRepositoryInterface {
  signInWithGoogle () {
    return Promise.resolve(user)
  }

  logout () {
    return Promise.resolve()
  }

  auth () {
    return Promise.resolve(user)
  }
}
