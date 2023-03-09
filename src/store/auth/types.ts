export type State = {
  user: any;
  token: {
    access: string;
  };
};

export type Payload = {
  username: string;
  password: string;
};
