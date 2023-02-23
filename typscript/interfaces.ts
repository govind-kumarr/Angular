interface User {
  name: string;
  age: number;
  id: number;
  email: string;
  login(): string;
}

let john: User = {
  name: "John",
  age: 36,
  id: 1,
  email: "john@example.com",
  login(): string {
    return crypto.randomUUID();
  },
};

let users: User[] = [
  {
    name: "John",
    age: 36,
    id: 1,
    email: "john@example.com",
    login(): string {
      return crypto.randomUUID();
    },
  },
];

let [user1]: User[] = users;
