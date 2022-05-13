'use strict';
const allCashbox2 = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
    ];

    let sum = [];

    
    const getAveragePriceGoods = (arr) =>{
        arr.forEach((element) => {

            sum.push(parseFloat((element[1]/element[0]).toFixed(2)));
            
        });

        console.log(sum);

        console.log( `средняя цена товара в чеке ${(sum.reduce((prevCost, currCost) => prevCost + currCost) / sum.length).toFixed(2)}p.`
            
        );
        

    };


    getAveragePriceGoods(allCashbox2);