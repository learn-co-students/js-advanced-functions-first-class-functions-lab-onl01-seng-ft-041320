// Code your solution in this file!

function returnFirstTwoDrivers(arrayOfDrivers){
  const firstTwo = [arrayOfDrivers[0], arrayOfDrivers[1]]
  return firstTwo
}


function returnLastTwoDrivers(arr){
  const lastTwo = arr.slice(-2)
  return lastTwo
}

let selectingDrivers = [
  returnFirstTwoDrivers, 
  returnLastTwoDrivers
]

function createFareMultiplier(multiplier){
  return function (fare){
    return parseInt(multiplier) * parseInt(fare)
  }
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers)
}