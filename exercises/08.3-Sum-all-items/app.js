function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (const i of theArray) {
		total += i;
	}
	return total;
}
console.log(sumTheElements([2,13,34,5]));
