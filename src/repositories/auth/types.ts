export interface AuthRepositoryInterface {
  signInWithGoogle(): Promise<void>;
  auth(): Promise<any>;
}
