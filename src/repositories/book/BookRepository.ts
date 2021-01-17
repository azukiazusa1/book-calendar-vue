import 'firebase/functions'
import firebase from '@/plugins/firebase'
import db from '@/plugins/db'
import { useAuth } from '@/composables/use-auth'
import { Params, BookRepositoryInterface, Result, BookItem } from './types'

const functions = firebase.functions()
functions.useEmulator('localhost', 5001)
const func = functions.httpsCallable('books')

const { auth } = useAuth()
const useBookRef = async () => {
  const user = await auth()
  if (!user) {
    throw new Error('ログインが必要です。')
  }

  return db.collection('users').doc(user.uid).collection('books')
}

export class BookRepository implements BookRepositoryInterface {
  async find (params: Params) {
    const result = await func(params)
    return result.data.data as Result
  }

  async regist (book: BookItem) {
    const bookRef = await useBookRef()
    const doc = await bookRef.add(book)
    console.log(doc)
    return {
      docId: doc.id,
      ...book
    }
  }
}
