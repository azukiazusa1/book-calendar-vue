import { AuthRepository, MockAuthRepository, AuthRepositoryInterface } from '@/repositories/auth'
import { UserRepository, MockUserRepository, UserReositoryInterface } from '@/repositories/user'

export const AUTH = Symbol('auth')
export const USER = Symbol('user')

export interface Repositories {
  [AUTH]: AuthRepositoryInterface;
  [USER]: UserReositoryInterface;
}

export default {
  [AUTH]: process.env.NODE_ENV === 'test' ? new MockAuthRepository() : new AuthRepository(),
  [USER]: process.env.NODE_ENV === 'test' ? new MockUserRepository() : new UserRepository()
} as Repositories
