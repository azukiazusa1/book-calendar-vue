import 'firebase/functions'
import firebase from '@/plugins/firebase'
import { Params, BookRepositoryInterface, Result } from './types'

const functions = firebase.functions()
functions.useEmulator('localhost', 5001)
const func = functions.httpsCallable('books')

export class BookRepository implements BookRepositoryInterface {
  async find (params: Params) {
    const result = await func(params)
    return result.data.data as Result
  }
}
