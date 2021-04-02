interface User {
  id: number;
  email: string;
  password: string;
}

export const users: User[] = [
  { id: 1, email: "test@mail.com", password: "12345678" },
];
