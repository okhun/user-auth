export type State = {
  users: User[];
  isLoading: boolean;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
};
