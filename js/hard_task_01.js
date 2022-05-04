const NOD = (n1, n2) => {

    while (n1 != n2) {
        if (n1 > n2) n1 = n1 - n2;
        if (n2 > n1) n2 = n2 - n1;
    }

    alert(n1);
}

const num1 = +prompt('Введите 1 число');
const num2 = +prompt('Введите 2 число');

NOD(num1, num2);

