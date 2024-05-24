let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let newArray = [];
for(i=0;i<mix.length;i++){
    let type = typeof mix[i];
    if(!newArray[type]){
        newArray = newArray.concat(type);
    }
}
console.log(newArray);

