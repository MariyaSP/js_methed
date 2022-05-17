const count = +prompt('введите количество элементов');
const n = +prompt('введите начальное значение интревала');
const m = +prompt('введите конечное значение интревала');
const str = 'odd';
let item;

const arr = [];

console.log(`наши числа н =${n} м = ${m}`);

const randomArr = (count, min, max, flag) =>{

    for(let i = 0; i < count; i++){

        if(flag === 'even'){
            do{
                item = Math.floor(Math.random() * ((Math.max(min, max) - Math.min(min, max)) + 1)) + Math.min(min, max);
            }
            while(item % 2 === 0)
        }
        else{
            do{
                item = Math.floor(Math.random() * (Math.max(min, max) - Math.min(min, max) + 1)) + Math.min(min, max);
            }
            while(item % 2 !== 0 )
        }
        
        arr.push(item);
    }
    console.log(arr);
}

randomArr(count, n, m, str);