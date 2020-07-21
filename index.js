const drivers = function(drivers){return drivers};

function returnFirstTwoDrivers(drivers) {
    return [drivers[0], drivers[1]]
}

function returnLastTwoDrivers(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    };
}

const cost = createFareMultiplier

function fareDoubler(fare) {
    return cost(2)(fare)
}

function fareTripler(fare) {
    return cost(3)(fare);
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
};