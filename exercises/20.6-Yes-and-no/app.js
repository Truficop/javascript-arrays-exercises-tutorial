let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let newFunct = function(value){
    if (value === 0) {
        return 'woko';
    }else if(value === 1){
        return 'wiki';
    }
}

let newArray = theBools.map(newFunct);
console.log(newArray);