const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id){
return new Promise((resolve,reject) =>{
setTimeout(() => {
  const person = persons.find(item => item.id === id);
    
  if (person) {
    return resolve(person);
  }

  return reject(`Person with id: ${id} doesn't exist`);
}, 1000);
})
}
function fetchJobById(id){
  return new Promise((resolve,reject)=>{
  let job = jobs.find(item => item.id === id)
  if(job){
    return resolve(job)
  }
   return reject("l'id che hai inserito non è valido")
})
}


fetchPersonById(1)
.then((id)=>{
  console.log(id)
})

const promise1 = fetchPersonById(1);
const promise2 = fetchJobById(1);

Promise.all([promise1, promise2,]).then((values) => {
  console.log(values);
});

