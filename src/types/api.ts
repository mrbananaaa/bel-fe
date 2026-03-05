export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

// export type Meta = {
//   page: number;
//   total: number;
//   totalPages: number;
// };

export type User = Entity<{
  displayName: string;
  email: string;
  username: string;
  password: string;
  profilePicture?: string;
  description?: string;
}>;

export type AuthResponse = {
  jwt: string;
  user: User;
};
