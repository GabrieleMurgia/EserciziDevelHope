const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person,(key,value) => typeof(value) == "string" ? undefined : value);
console.log(json); // Should return: { id: 1, age: 25 }