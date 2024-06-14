let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
function tiposDeValores(array) {
    const tipoValores = [];
    for (let i = 0; i < array.length; i++) {
        tipoValores.push(typeof array[i]);
    }
    console.log(tipoValores);
    return tipoValores;
}

tiposDeValores(mix);