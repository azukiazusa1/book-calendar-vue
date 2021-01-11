import { UserRepository, MockUserRepository, UserReositoryInterface } from '@/repositories/user'
import { BookRepository, BookRepositoryInterface } from '@/repositories/book'
import { MockBookRepository } from './book/MockBookRepository'

export const USER = Symbol('user')
export const BOOK = Symbol('book')

export interface Repositories {
  [USER]: UserReositoryInterface;
  [BOOK]: BookRepositoryInterface;
}

export default {
  [USER]: process.env.NODE_ENV === 'test' ? new MockUserRepository() : new UserRepository(),
  [BOOK]: process.env.NODE_ENV === 'test' ? new MockBookRepository() : new BookRepository()
} as Repositories
