interface User {
  id: number;
  name: string;
}

const users = ["alice", "bob", "charlie"];

const toUserObjects = (users: string[]): User[] =>
  users.map((name, index) => ({
    id: index + 1,
    name,
  }));
console.log(toUserObjects(users));
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
