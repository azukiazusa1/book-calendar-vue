import db from '@/plugins/db'
import { User, UserPayload, UserReositoryInterface } from '@/repositories/user/types'
const usersRef = db.collection('users')

export class UserRepository implements UserReositoryInterface {
  async find (uid: string) {
    const doc = await usersRef.doc(uid).get()
    if (!doc.exists) {
      throw new Error(`Document ID: ${uid} is not found.`)
    }

    return {
      uid: doc.id,
      ...doc.data()
    } as User
  }

  async findOrCreate (user: User) {
    const { uid, displayName, photoURL } = user
    const doc = await usersRef.doc(uid).get()
    if (doc.exists) {
      return {
        uid: doc.id,
        ...doc.data()
      } as User
    }

    await usersRef.doc(uid).set({
      displayName,
      photoURL
    })
    return {
      uid,
      displayName,
      photoURL
    } as User
  }

  async update (uid: string, payload: UserPayload) {
    const { displayName, photoURL } = payload
    return usersRef.doc(uid).update({
      displayName,
      photoURL
    })
  }

  async delete (uid: string) {
    return usersRef.doc(uid).delete()
  }
}
