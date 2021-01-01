import { DeepReadonly } from 'vue'
import { User } from '@/repositories/user/types'

export interface UserState {
  user: User | null;
}

export interface UserStore {
  state: DeepReadonly<UserState>;
  setUser: (user: User) => void;
}
