'use strict'
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            alert('Число не простое');
            return;
        }
    }
    alert('Число простое');
}

const number = +prompt('Введите число');
isPrime(number);
