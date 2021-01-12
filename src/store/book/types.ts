import { BookItem } from '@/repositories/book'
import { DeepReadonly } from 'vue'

export interface BookState {
  books: BookItem[];
}

export interface BookStore {
  state: DeepReadonly<BookState>;
  registAsReading: (book: BookItem) => Promise<void>;
  registAsRead: (book: BookItem) => Promise<void>;
  registAsStock: (book: BookItem) => Promise<void>;
}
