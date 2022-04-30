const productName = prompt('Наименование товара');

let productCount = Number(prompt('Количество товара'));

while(isNaN(productCount)||productCount==0){
    let productCount = Number(prompt('Количество товара'));
}
const productCategory = prompt('Категория товара');

const price = Number(prompt('Цена товара'));
while(isNaN(price)||price==0){
    let price = Number(prompt('Цена товара'));
}
console.log(typeof(productName));
console.log(typeof(productCount));
console.log(typeof(productCategory));
console.log(typeof(price));

// console.log(`Общая сумма: ${productCount*price}`);
console.log(`На складе ${productCount} единицы товара ${productName} на сgthajhfnjh`);