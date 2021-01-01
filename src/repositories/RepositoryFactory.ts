import { AuthRepository, MockAuthRepository, AuthRepositoryInterface } from '@/repositories/auth'

export const AUTH = Symbol('auth')

export interface Repositories {
  [AUTH]: AuthRepositoryInterface;
}

export default {
  [AUTH]: process.env.NODE_ENV === 'test' ? new MockAuthRepository() : new AuthRepository()
} as Repositories
