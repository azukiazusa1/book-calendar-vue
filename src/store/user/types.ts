import { DeepReadonly } from 'vue'

export interface User {
  displayName: string;
  photoURL: string;
}

export interface UserState {
  user: User | null;
}

export interface UserStore {
  state: DeepReadonly<UserState>;
  setUser: (user: User) => void;
}
