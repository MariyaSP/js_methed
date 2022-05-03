'use strict'

const income = +prompt('Введите сумму Вашего дохода:');
let tax= 0;

if ((income < 15000) && (income > 0)) {
    tax = income * 0.13;
} else if ((income >= 15000) && (income < 50000)) {
    tax = income * 0.2;
        }
        else if (income >= 50000) {
                 tax = income * 0.3;
                }
                else tax = 0;

console.log(`При доходе ${income} - сумма налога: ${tax.toFixed(2)}`);