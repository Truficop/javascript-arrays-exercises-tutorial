let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    console.log(typeof item)
    // MAGIC HAPPENS HERE
    if(typeof item === 'object' && !Array.isArray(item)){
        hello = hello.concat(item);
        console.log(hello)
    }else if(typeof item === 'object' && Array.isArray(item)){
        hello = hello.concat(item);
        console.log(hello)
    }
        
}

console.log(hello)
