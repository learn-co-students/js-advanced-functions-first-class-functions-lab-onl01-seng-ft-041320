// Code your solution in this file!

let returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}

let returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return (fare) => { return fare * int }
}

const fareDoubler = (arg) => {
    return createFareMultiplier(2)(arg)
}

const fareTripler = (arg) => {
    return createFareMultiplier(3)(arg)
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}