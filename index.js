
//return the first two drivers in the array.
 const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

//return the last two drivers in the array.
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

//containing two elements: the two functions that we previously defined .
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

//returns a function that will multiply with value
const createFareMultiplier = function (mul) {
    return function (v) {
      return mul * v;
    };
  };
  
  //returned by createFareMultiplier()
  //function accepts and doubles it.
  const fareDoubler = createFareMultiplier(2);

  //function accepts a fare and triples it.
  const fareTripler = createFareMultiplier(3);

  //takes two arguments, drivers arr and returnFirstTwoDrivers then return
  const selectDifferentDrivers = function (drivers, return_first_two) {
    return return_first_two(drivers);
  };