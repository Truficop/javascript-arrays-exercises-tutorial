let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here

// function findMax(lista) {
//     let bigestNumber = 0
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] > bigestNumber) {
//             bigestNumber = lista[i]
//         } 
        
//     }
//     return bigestNumber;
// }


// function findMax(lista) {
//     return Math.max(...lista);
// }


const findMax = lista => Math.max(...lista);

console.log(findMax(myArray))