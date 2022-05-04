'use strict';

const  getSumma = (summa, dol, rub) => {
    console.log(typeof(dol));
    const calc = (summa * dol) * rub;
    return `Стоимость покупки в рублях: ${calc.toFixed(2)}`
}

const summa = +prompt('Введите стоимость покупки в евро');
const dol = 1.2;
const rub = 73;

alert(getSumma(summa, dol, rub));
