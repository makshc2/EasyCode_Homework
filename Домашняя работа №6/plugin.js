//Сделал 2 первых обязательных задания, реализовал удаление товара и вывод сообщений. Не успел доделать редактирование
// товара и сортировку по заданному диапазону, сегодня-завтра закончу все дополнительные задания


// Массив в localStorage
let items = JSON.parse(localStorage.getItem('items')) || [];

console.log(items);

//Елементы с которыми мы работаем
let table = document.querySelector('.table');
let form = document.forms['addItems'];
let inputName = form.elements['itemName'];
let inputPrice = form.elements['itemPrice'];
let button = document.querySelector('.sort');
let successDiv = document.querySelector('.alert-success');
let dangerDiv = document.querySelector('.alert-danger');
let divInfoClearList = document.querySelector('.alert-info');



function alertInfo() {
    items.length === 0 ? divInfoClearList.classList.add('alert_show') : divInfoClearList.classList.remove('alert_show');
};
alertInfo(items);

//генерация разметки из массива
function generateList() {
    alertInfo(items);
    table.innerHTML = ''; // очистка списка, для того, что бы не дублировать массив
    for (let i = 0; i < items.length; i++) {
        let template = `
            <tr data-id=${items[i].id}>
                <td>
                  ${items[i].name}
                </td>
                 <td>
                   ${items[i].price}
                </td>   
                <td>
                    <i class ='fas fa-edit edit-item ml-2'></i>
                    <i class ='fas fa-trash-alt delete-item ml-4'></i>
                </td>            
            </tr>
                    `;
        table.insertAdjacentHTML('afterbegin', template);
    }
};

generateList(); // загружаем товары из массива при загрузке страницы

//генерация ID

function generateId() {
    let id = '';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for( let i = 0; i < 15; i++){
        let position = Math.floor(Math.random()*words.length);
        id += words[position];
    }
    return id;
}

//функция которая удаляет через определенное время информационные сообщения

function deleteAlertInfo() {
    setTimeout(() => {
        dangerDiv.classList.remove('alert_show');
        successDiv.classList.remove('alert_show');
    }, 2500);
}

//Добавляет новую информацию в массив, который обрабатывают функции выше
function addList(text, number) {
    let newItems = {
        id:generateId(),
        name: text,
        price: number
    };
    items.unshift(newItems);
    localStorage.setItem('items', JSON.stringify(items));
    generateList();
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
// проверка строки на пустое значение, если пустое, то подстветка красным
    if (!inputName.value  || !inputPrice.value){
        inputName.classList.add('is-invalid');
        inputPrice.classList.add('is-invalid');
    }else {
        inputName.classList.remove('is-invalid');
        inputPrice.classList.remove('is-invalid');
        addList(inputName.value, inputPrice.value);
        successDiv.classList.add('alert_show'); //выводит сообщение Item added success
        form.reset();
    }
    deleteAlertInfo();
});

//Сортировка

function sort() {
    button.classList.toggle('sort');
    if (button.classList.contains('sort') === true) {
        items.sort((a, b) => a.price - b.price );
    } else {
        items.sort((a, b) => b.price - a.price );
    }
    generateList();
};

inputName.addEventListener('keyup', function (e) {
    if( inputName.value){
        inputName.classList.remove('is-invalid');
        inputPrice.classList.remove('is-invalid');
    }
});


function  deleteListItem(id) {
    for (let i = 0; i < items.length; i++) {
        if  (items[i].id === id){
            items.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('items', JSON.stringify(items));
    alertInfo(items);

}

table.addEventListener('click', function (e) {
    if( e.target.classList.contains('delete-item') ){
        let parent = e.target.closest('tr');
        let id = parent.dataset.id;
        deleteListItem(id);
        parent.remove();
        dangerDiv.classList.add('alert_show');
    }else if( e.target.classList.contains('edit-item') ){
        e.target.classList.toggle('fa-save');
    }
    deleteAlertInfo();
});


