// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = (number) => {
    return function(fare) {
        return number * fare;
    }

}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}