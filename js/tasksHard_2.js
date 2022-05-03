'use strict'

const income = +prompt('Введите сумму Вашего дохода:');
let tax= 0;

if ((income < 15000) && (income > 0)) {
    tax = income * 0.13;
} else if ((income >= 15000) && (income < 50000)) {
    tax = 15000 * 0.13 + (income-15000) * 0.2;
        }
        else if (income >= 50000) {
                 tax = (income-50000) * 0.3 + 50000 * 0.2 + 15000 * 0.13;
                }
                else tax = 0;

console.log(`При доходе ${income} - сумма налога: ${tax.toFixed(2)}`);