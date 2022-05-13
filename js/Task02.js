'use strict';
const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    
    console.log(Math.floor(arr.reduce((prevValue, currValue) => prevValue + currValue) / arr.length));
};


getAverageValue(allCashbox);
