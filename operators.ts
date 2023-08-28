interface Person {
  name: string,
  age: number
}

type PersonKeys = keyof Person // Теперь в типе PersonKeys может быть 'name' | 'age'
let key: PersonKeys = 'name';
key = 'age'; // Иное, кроме 'name' | 'age', нельзя;

type User = {
  _id: number,
  name: string,
  email: string,
}

type UserKeysNoEmail = Exclude<keyof User, 'email'> // В UserKeysNoEmail не будет поля email;
type UserKeysNoEmail2 = Pick<User, '_id' | 'name'> // В UserKeysNoEmail не будет поля email;
