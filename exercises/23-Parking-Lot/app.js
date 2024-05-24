let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(Lots){
    let totalSlots = 0;
    let availableSlots = 0;
    let occupiedSlots = 0;
    for (let i = 0; i < Lots.length; i++) {
      for (let j = 0; j < Lots[i].length; j++) {
        totalSlots += 1;
        if (Lots[i][j] === 2) {
          availableSlots += 1;
        } else if(Lots[i][j] === 1){
          occupiedSlots += 1;
        } else if (Lots[i][j] === 0) {
          totalSlots -= 1;
        }
        
      }
      
    }

    return {totalSlots, availableSlots, occupiedSlots}
}

console.log(getParkingLotState(parkingState))
