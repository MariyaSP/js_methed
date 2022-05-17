const count = +prompt('введите количество элементов');
const arr = [];

const randomArr = (count) =>{
    for(let i = 0; i<count; i++){
        arr.push(Math.floor(100 * Math.random() + 1));
    }
    console.log(arr);
}

randomArr(count);