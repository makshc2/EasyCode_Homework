// Models

// Массив в localStorage
let items = JSON.parse(localStorage.getItem('items')) || [];

console.log(items);

//Елементы с которыми мы работаем
let table = document.querySelector('.table');
let form = document.forms['addItems'];
let inputName = form.elements['itemName'];
let inputPrice = form.elements['itemPrice'];

//генерация рамзетки из массива
function generateList() {
    table.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let template = `
    <tr data-id=${items[i].id}>
        <td>
           ${items[i].name}
        </td>
        <td>
            ${items[i].price}
        </td>
    </tr>
`;
        table.insertAdjacentHTML('afterbegin', template);
    }
};


// генерация ID

function generateId() {
    let id = '';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for( let i = 0; i < 15; i++){
        let position = Math.floor(Math.random()*words.length);
        id += words[position];
    }
    return id;
}

//Добавляет новую информацию в массив, который обрабатывают функции выше
function addList(text, number) {
    let newItems = {
        id:generateId(),
        name: text,
        price: number
    };
    items.unshift(newItems);
    generateList();
    localStorage.setItem('items', JSON.stringify(items));
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputName.value  || !inputPrice.value){
        inputName.classList.add('is-invalid');
        inputPrice.classList.add('is-invalid');
    }else {
        inputName.classList.remove('is-invalid');
        inputPrice.classList.remove('is-invalid');
        addList(inputName.value, inputPrice.value);
        // successDiv.classList.add('alert_show'); //выводит сообщение Task added success
        form.reset();
    }
});


// Генерировать разметку также можно с помощью строки. Пример




