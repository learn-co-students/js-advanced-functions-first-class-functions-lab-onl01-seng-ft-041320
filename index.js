// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayofdrivers) {
        return arrayofdrivers.slice(0,2)
}

const returnLastTwoDrivers = function(arrayofdrivers) {
    return arrayofdrivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
    return function (fare) {
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayofdrivers, func) {
    return func(arrayofdrivers)
}