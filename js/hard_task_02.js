const  max = (n1, n2) => {
    const itog = (Math.abs(n1+n2) - Math.abs(n1-n2))/2;
    alert(`минимальное число число ${itog}`)
}


const num_1 = +prompt('Введите 1 положительное число');
const num_2 = +prompt('Введите 2 положительное число');
max(num_1, num_2)
