import { UserRepository, MockUserRepository, UserReositoryInterface } from '@/repositories/user'

export const USER = Symbol('user')

export interface Repositories {
  [USER]: UserReositoryInterface;
}

export default {
  [USER]: process.env.NODE_ENV === 'test' ? new MockUserRepository() : new UserRepository()
} as Repositories
