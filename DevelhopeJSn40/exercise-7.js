class Person {
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
}
set firstName(newName) {
    
    
    this._firstName = newName;
}
get lastName() {
  return this._lastName;
}
set lastName(newName) {
  
  
  this._lastName = newName;
}
 get fullName(){
  return `${person._firstName} ${person._lastName}`
}
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);