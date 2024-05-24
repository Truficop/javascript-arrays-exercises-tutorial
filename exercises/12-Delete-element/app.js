let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
let deletePerson = personToDelete => people.filter((person) => person !== personToDelete);

// function deletePerson(personToDelete){
//     let newArray = people.filter((a) => a !== personToDelete)
//     return newArray;
// }



console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
