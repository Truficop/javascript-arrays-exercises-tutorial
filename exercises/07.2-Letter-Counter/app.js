let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
function count(arr) {
    arr = arr.toLowerCase();
    for (const letra of arr) {
        if (letra !== ' ') {
            if (counts[letra]) {
                counts[letra]++;
            } else {
                counts[letra] = 1;
            }   
        }
    }
    return counts;
}
count(par);
console.log(counts);
