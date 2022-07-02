const person = {
  
 firstName:"",
 lastName:"",

 get firstNameGet(){
   this.firstName
 },
  set firstNameSet(value){
   this.firstName = value;
 },

 get lastNameGet(){
  this.lastName
 },

 set lastNameSet(value){
  this.lastName = value;
 },

 fullName(){
   return `${this.firstName} ${this.lastName}`
 }

}
const john = Object.create(person);
const simon = Object.create(person);

john.firstName = "John";
john.lastName="Doe"
simon.firstName = "Simon";
simon.lastName="Collins"

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins