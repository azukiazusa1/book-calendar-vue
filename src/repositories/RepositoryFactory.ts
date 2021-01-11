import { UserRepository, MockUserRepository, UserReositoryInterface } from '@/repositories/user'
import { BookRepository, BookRepositoryInterface, MockBookRepository } from '@/repositories/book'

export const USER = Symbol('user')
export const BOOK = Symbol('book')

export interface Repositories {
  [USER]: UserReositoryInterface;
  [BOOK]: BookRepositoryInterface;
}

const isMock = process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'mock'

export default {
  [USER]: isMock ? new MockUserRepository() : new UserRepository(),
  [BOOK]: isMock ? new MockBookRepository() : new BookRepository()
} as Repositories
