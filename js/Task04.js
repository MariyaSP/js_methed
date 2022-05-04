const calculate = (sum, count, promo) => {
    let score = sum;
    if (count > 10) {
        score = score - score * 0.03;
        console.log(score);
    }

    if (sum > 30000) {
        score = score - ((sum - 30000) * 0.15);
        console.log(score);
    }

    if (promo === "METHED") {
        score = score - score * 0.1;
        console.log(score);
    }

    if ((promo === "G3H2Z1") && (score > 2000)) {
        score = score - 500;
        console.log(score);
    }

    alert(score);
}

const total_summ = +prompt('Введите общую сумму корзины');
const product_count = +prompt('Введите количество товаров в корзине');
const promocod = prompt('Введите промокод');

calculate(total_summ, product_count, promocod);
