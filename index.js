// Code your solution in this file!
const returnFirstTwoDrivers = function(array){

    let firstArray = [array[0], array[1]]
    
    return firstArray
}

const returnLastTwoDrivers = function(array){
    let lastArray = [array[array.length-2], array[array.length-1]]
    return lastArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    }
}

 const fareDoubler = function(fare){
     return fare * 2
}

const fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(array, func){
    return func(array)
}