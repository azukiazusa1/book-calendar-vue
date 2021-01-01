import { ComputedRef, DeepReadonly } from 'vue'
import { User, UserPayload } from '@/repositories/user/types'

export interface UserState {
  user: User | null;
}

export interface UserStore {
  state: DeepReadonly<UserState>;
  get: ComputedRef<User>;
  set: (user: User) => void;
  unset: () => void;
  findOrCreate: (user: User) => Promise<void>;
  update: (uid: string, payload: UserPayload) => Promise<void>;
  delete: (uid: string) => Promise<void>;
}
