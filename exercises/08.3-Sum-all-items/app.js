function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(i = 0; i<theArray.length;i++){
		total += theArray[i]; 
	}

	return total;
}
let theArray = [2,13,34,5];
let suma = sumTheElements(theArray);
console.log(suma);