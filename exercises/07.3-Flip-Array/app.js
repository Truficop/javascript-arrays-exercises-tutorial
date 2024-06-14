let arr = [45,67,87,23,5,32,60];

// Your code here
function revert(array) {
    const reverseArray = [];
    for (let i = array.length -1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    console.log(reverseArray);
    return reverseArray;
}

revert(arr);