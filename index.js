// Code your solution in this file!
 

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);  
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); 
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);  
    return blocksTravelled * 264;  
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
  
    if (distance > 2500) {
      return 'cannot travel that far';  
    } else if (distance > 2000) {
      return 25; 
    } else if (distance > 400) {
      return (distance - 400) * 0.02;  
      return 0;  
    }
  }
  