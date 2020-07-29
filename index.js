// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    let firstTwo = []
    firstTwo.push(drivers[0], drivers[1])
    return firstTwo
}

const returnLastTwoDrivers = function(drivers){
    let lastTwo = []
    lastTwo.push(drivers[drivers.length-2], drivers[drivers.length-1])
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(value){return value*multiplier}
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, selector){
    return selector(drivers)
}