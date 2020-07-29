// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length-2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (fare) => {
        return fare * multiplier
    }
}

const fareDoubler = (fare) => {return createFareMultiplier(2)(fare)}

const fareTripler = (fare) => {return createFareMultiplier(3)(fare)}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}