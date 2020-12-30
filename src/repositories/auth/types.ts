import firebase from 'firebase'

export interface AuthRepositoryInterface {
  signInWithGoogle(): Promise<firebase.User | null>;
  logout(): Promise<void>;
  auth(): Promise<firebase.User | null>;
}
