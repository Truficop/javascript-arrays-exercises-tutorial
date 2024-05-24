let arr = [45,67,87,23,5,32,60];

// Your code here
let arreves = [];
for(let i = arr.length -1; i>=0; i--){
    let number = arr[i];
    if(!arreves[number]){
        arreves = arreves.concat(number);
    }

}
console.log(arreves);