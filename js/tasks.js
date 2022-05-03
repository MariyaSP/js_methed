'use strict'
const rain = Math.round(Math.random());
console.log(rain ? "Пошёл дождь. Возьмите зонт!" : "Дождя нет!");

const mathemat = +prompt('Введите кол-во баллов по математике:');
const russian = +prompt('Введите кол-во баллов по русскому языку:');
const informat = +prompt('Введите кол-во баллов по информатике:');

if ((mathemat + russian + informat) >= 265) {
    alert('Поздравляю, вы поступили на бюджет!');
}


const takeOff = +prompt('Cколько денег Вы хотите снять?');
if ((takeOff >= 100) && (takeOff % 100 === 0)) {
    alert('Банкомат может выдать Вам запрашиваемую сумму');
} else {
    alert('Банкомат НЕ может выдать Вам запрашиваемую сумму');
}