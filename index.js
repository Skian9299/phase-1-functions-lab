// Code your solution in this file!
const hqStreet = 42;

function distanceFromHqInBlocks(pickupStreet) {
  return Math.abs(pickupStreet - hqStreet);
}
function distanceFromHqInFeet(pickupStreet) {
    return distanceFromHqInBlocks(pickupStreet) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Over 2500 feet is not allowed
    }
  }
      