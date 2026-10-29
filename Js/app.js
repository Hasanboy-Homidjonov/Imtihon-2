import { users } from "./date.js";

function addUser(name, lastname, age, job, email, password) {
  let newUser = {
    id:users.length === 0 ? 1:users.at(-1).id+1,
    name,
    lastname,
    age,
    job,
    email,
    password,
  };
  return users.push(newUser);
}


addUser(
    "john doe",
    "macgregor",
    34,
    "boxer",
    "johndoe@gmail.com",
    "1234",
),
console.log(users);


