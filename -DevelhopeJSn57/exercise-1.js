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

function fetchPersonById(id) {
  return new Promise((resolve,reject) => {
    if(persons.find(item => item.id === id) !== undefined){
    resolve(console.log(persons.find(item => item.id === id)));
    }
    else {
      reject (new Error("l'id che hai inserito non è presente nell'oggetto"));
    }
  });
}

fetchPersonById(1).then;