const  getString = (text) => {
    console.log(text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase());
}

const text = prompt('Введите исходную строку');
getString(text);

