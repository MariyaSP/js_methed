const  stringReverse = (text) => {
    const lowText = text_reverse.split('').reverse().join('');

    alert(lowText);
}

const text_reverse = prompt('Введите исходную строку');
stringReverse(text_reverse);