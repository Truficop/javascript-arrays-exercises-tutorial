// Your code here
let matrixBuilder = function(size){
    let realMatrix = [];
	for (let i = 0; i < size; i++) {
        let inerMatrix = [];
            for (let i = 0; i < size; i++) {
                let randomNumber = Math.round(Math.random());
                inerMatrix.push(randomNumber);
            }
        realMatrix.push(inerMatrix);    
    }
    return realMatrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
