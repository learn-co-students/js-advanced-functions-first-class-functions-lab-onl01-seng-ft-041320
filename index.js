// Code your solution in this file!
let drivers = ["morgan", "brad", "lauren", "tyler"]

const returnFirstTwoDrivers = function(drivers){
let newarr = [drivers[0], drivers[1]];
return newarr
}

const returnLastTwoDrivers = function(drivers){
let newarr = [drivers[drivers.length-2], drivers[drivers.length-1]];
return newarr
}

//const selectingDrivers = function(arr){
//  let sel1 =returnFirstTwoDrivers(arr);
//  let sel2 =returnLastTwoDrivers(arr);
//return [sel1[0], sel1[1], sel2[0], sel2[1]]}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (cost) {
  return function (multiplyValue) {
    return multiplyValue * cost;
  };
};

const fareDoubler= function(cost){
  return createFareMultiplier(cost)(2)
};

const fareTripler= function(cost){
  return createFareMultiplier(cost)(3)
};

function selectDifferentDrivers(arr, func){
  return func(arr)
}
