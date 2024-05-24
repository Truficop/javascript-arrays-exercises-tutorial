let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here

// function mergeTwoList(lista){
//     let odd = []
//     let even = []
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] % 2 !== 0) {
//             odd.push(lista[i])
//         }else if (lista[i] % 2 === 0) {
//             even.push(lista[i])
//         }
        
//     }
//     return odd.concat(even);
// }



// function mergeTwoList(lista) {
//     return lista.reduce((odd, even) => {
//         even % 2 !== 0 ? odd[0].push(even) : odd[1].push(even);
//         return odd;
//     }, [[], []]).flat();
// }


const mergeTwoList = lista => lista.reduce((odd, even) => (even % 2 !== 0 ? odd[0].push(even) : odd[1].push(even), odd), [[], []]).flat();

console.log(mergeTwoList(listOfNumbers))
