import { User, UserPayload, UserReositoryInterface } from '@/repositories/user/types'

const user = {
  uid: 'uid',
  displayName: 'test',
  photoURL: 'testPhoto'
} as User

export class MockUserRepository implements UserReositoryInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  find (uid: string) {
    return Promise.resolve(user)
  }

  async findOrCreate (user: User) {
    return Promise.resolve(user)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update (uid: string, payload: UserPayload) {
    return Promise.resolve()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async delete (uid: string) {
    return Promise.resolve()
  }
}
