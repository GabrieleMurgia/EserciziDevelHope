function getKeys(obj) {
  let keys=[];
  for(i=0;i<Object.keys(obj).length;i++){
   keys.push(obj[Object.keys(obj)[i]]);
  }
  return keys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);