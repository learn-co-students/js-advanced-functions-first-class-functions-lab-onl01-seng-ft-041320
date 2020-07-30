
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(amount) {
  return function (fare) {
    return amount * fare
  }
}

function fareDoubler(amount) {
  return createFareMultiplier(amount)(2)
}
//
function fareTripler(amount){
  return createFareMultiplier(amount)(3)
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
