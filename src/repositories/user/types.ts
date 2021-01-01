export interface User {
  uid: string;
  displayName: string;
  photoURL: string;
}

export type UserPayload = Pick<User, 'displayName' | 'photoURL'>

export interface UserReositoryInterface {
  find(uid: string): Promise<User>;
  findOrCreate(user: User): Promise<User>;
  update(uid: string, payload: UserPayload): Promise<void>;
  delete(uid: string): Promise<void>;
}
