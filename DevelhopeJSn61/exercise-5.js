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


function fetchPersonByid(id){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    let person = persons.find(item=> item.id === id)

    if(person){
      return resolve(person)
    }
    
    return reject("l'id che hai inserito non è valido")
  }, 1000);
  })
}
function fetchJobByid(id){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let job = jobs.find(item=> item.id === id)
  
      if(job){
        return resolve(job)
      }
      
      return reject("l'id che hai inserito non è valido")
    }, 500);
    })
}

const promise1 = fetchPersonByid(1);
const promise2 = fetchJobByid(1);

Promise.any([promise1, promise2,]).then((values) => {
  console.log(values);
});

