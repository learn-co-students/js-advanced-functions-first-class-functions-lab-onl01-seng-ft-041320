// Code your solution in this file!
const returnFirstTwoDrivers = function(ray) {
    let rayCopy = [ray[0], ray[1]];
return(rayCopy)
}

const returnLastTwoDrivers = function(ray) {
    let rayCopy = [ray[ray.length - 2], ray[ray.length - 1]]
return(rayCopy);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
    return function(b){
        return (a * b)
    } 
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(selectingDrivers, something) {
    return something(selectingDrivers)
}

