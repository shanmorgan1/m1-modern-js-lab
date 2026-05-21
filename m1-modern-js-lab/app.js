import { users } from "./data.js";
const findUserById = (id) => {
  const user = users.find(user => user.id === id);

  if (!user) {
    return "Error: User not found";
  }

  const { name, email } = user;

  return `User: ${name} | Email: ${email}`;
};

console.log(findUserById(2));   
console.log(findUserById(99));  