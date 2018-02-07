//Задачи на методы массивов

//Задача №1

function doubleArray(arr) {
    let copy = arr.slice();
    for(let i = 0; i < arr.length;  i++ ) {
        copy.push(arr[i]);
    }
    return copy;
}

doubleArray(['one', 'two', 'three', 4, 5]);

//Задача №2

function lastElement(array) {
    return array[array.length -1];
}

lastElement(['one','two', 3, 4, 'five']);

//Задача №3

function getArray(num) {
    if( typeof num === 'undefined' || typeof num === 'NaN' || typeof num === 'Infinity' || Math.sign(num) === -1 ) return new Error ('No number');
    let newArr = [];
    for (let i = 1; i <= num; i++) {
        newArr.push(i);
    }
    return newArr;
}

getArray(10);

//Задача №4

function changeCollection(...args) {
    for (let i = 0; i < args.length; i++) {
            args[i].shift();
        }
    return args;
}

changeCollection([1, 2, 3], ['a', 'b', 'c']);

//Массивы

// Задача №1

function stringSort(str) {
    return str.split('').sort().reverse().join('');
}

stringSort('bcdaeflmjgkhi');


//Задача №2

function sortArrayReverse(arr) {
      return arr.sort ((previous, next) => next - previous);
}
sortArrayReverse([2, 4, 7, 1, -2, 10, -9]);

//Задача №3

function getNewArray(arr, a, b) {
    let newArr = arr.slice(a, b + 1); // метод slice вырезает часть массива с - по, но не включает послений элемент,
                                      // для этого было использавано b+1
    return newArr;
    }

getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4);

// Задача №4

function doubleArr(arr) {
    return arr.concat(arr);
}

doubleArr(['one', 2, 'three', 4]);

// Задача №5

function deleteEl(arr) {
    arr.splice(2,2);
    return arr;
}

deleteEl([1, 2, 3, 4, 5]);

// Задача №6

function addNewEl(arr) {
    arr.splice(2,2, 'there', 'four');
    return arr;
}

addNewEl([1, 2, 3, 4, 5]);

// Задача №7

function addNewElement(arr) {
    arr.splice(3,0, 'awesome');
    return arr;
}

addNewElement(['I', 'am', 'an', 'array']);

// Задача №8

function sortArrayInArr(arr) {
    return arr.sort ((previous, next) => previous.length - next.length);
}

sortArrayInArr([
    [14,45],
    [1],
    ['a','b','c']
]);

// Задача №9

function copyArr(arr) {
    return arr.concat();
}

copyArr(['I', 'am', 'an', 'array']);

// Задача №10

function sortCore(arr) {
    return arr.sort ((previous, next) => previous.info.cores - next.info.cores);
}

sortCore([
    {cpu:'intel', info:{cores: 2, cache: 3}},
    {cpu:'intel', info:{cores: 4, cache: 4}},
    {cpu:'amd', info:{cores: 1, cache: 1}},
    {cpu:'intel', info:{cores: 3, cache: 2}},
    {cpu:'intel', info:{cores: 4, cache: 2}}
]);


// Задача №11

const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
];

function filterCollection(arr, priceMin, priceMax) {
    let newCollection = [];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i].price;
        if( value >= priceMin && value <= priceMax ){
            newCollection.push(arr[i]);
        }
    }
    return newCollection.sort ((previous, next) => previous.price - next.price);
}

filterCollection(products, 15, 30);
