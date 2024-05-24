let coordinatesArray = [[33.747252, -112.633853], [-33.867886, -63.987], [41.303921, -81.901693], [-33.350534, -71.653268]];

// Your code here
// La primera coordenada es latitud
let latitude = coordinatesArray[0][0];
// La segunda coordenada es longitud
let longitude = coordinatesArray[0][1];
let z = []
coordinatesArray.forEach(function(item) {
    z.push(item[1]);
    
});
console.log(z)