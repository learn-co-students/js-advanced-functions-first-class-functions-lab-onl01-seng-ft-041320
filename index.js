const returnFirstTwoDrivers = function(drivers) {
  let newDrivers = drivers.slice(0, 2)
  return newDrivers
}

const returnLastTwoDrivers = function(drivers) {
  let newDrivers = drivers.slice(-2)
  return newDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(numOfTickets) {
  return function(fare) {
    return numOfTickets * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selection) {
  if (selection === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
  } else if (selection === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
  }
 }

