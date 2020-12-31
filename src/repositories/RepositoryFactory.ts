import { AuthRepository, AuthRepositoryInterface } from '@/repositories/auth'

export const AUTH = Symbol('auth')

export interface Repositories {
  [AUTH]: AuthRepositoryInterface;
}

export default {
  [AUTH]: new AuthRepository()
} as Repositories
