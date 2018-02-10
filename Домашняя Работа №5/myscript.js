//задача выполнена с некоторыми дополнениями от себя


//Массив который содержит наши таски и который мы обрабатываем в цикле и добавляем в li

let tasks = [
  "Выучить Java Script",
  "Выучить Angular 4",
  "Сходить на Kharkiv CSS#3",
  "Выучить функции",
];
console.log(tasks);

// в самом начале определяем ряд элементов с которыми работаем
let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
// div-ы с 4мя сообщениями: для добавления задачи, удаления задачи, очистки всего списка и о том, что список чист
let successDiv = document.querySelector('.alert-success');
let dangerDiv = document.querySelector('.alert-danger');
let clearListDiv = document.querySelector('.alert-danger_clearlist');
let divInfoClearList = document.querySelector('.alert-info');

//функция которая проверяет массив на наличие елементов и добавляет класс к div alert-info

function alertInfo() {
    tasks.length === 0 ? divInfoClearList.classList.add('alert_show') : divInfoClearList.classList.remove('alert_show');
}
alertInfo(tasks); // проверяем наличие елементов в массиве при загрузке страницы. Если их нет - сразу
// выводим сообщение Empty list.

//функция которая создает одну строку li
function listTemplate(task) {
    alertInfo(tasks); // если массив tasks не пустой - скрываем сообщение Empty list.
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex align-items-center';
    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
    li.appendChild(iDelete);
    return li;
}

// функция которая вешается на кнопку очистить список
function clearList() {
    ul.innerHTML = '';
    tasks.splice(0, tasks.length); // удаление всех задач из массива после очистки списка
    alertInfo(tasks); // после очистки всех елементов в Task list - проверяем массив на наличие элементов
    // (он будет равен 0) и выводим сообщение Empty list.
    clearListDiv.classList.add('alert_show'); // Сообщение о том, что весь список был очищен
    setTimeout(() => {
        clearListDiv.classList.remove('alert_show');// сделано для того, что бы сообщение пропадало через 2,5 секунды
    }, 2500);
}

// проходится по массиву, обрабатывает его и добавляет в li наши таски.
function generateList(tasksArray) {
    ul.innerHTML = '';
    for ( let i = 0; i < tasks.length; i++ ) {
        let li = listTemplate (tasksArray[i]);
        ul.appendChild(li);
    }
    // setDeleteEvent();
}

//Добавляет новую информацию в массив, который обрабатывают функции выше
function addList(list) {
    tasks.unshift(list);
    ul.insertAdjacentElement('afterbegin',listTemplate(inputText.value));
}

function  deleteListItem(target) {
    // 1.Найти родителя
    // 2.удалить родителя
    // 3.Splice, indexOf
    let parent = target.closest('li');
    let index = tasks.indexOf(parent.textContent);
    tasks.splice(index, 1);
    parent.remove();
    alertInfo(tasks); // проверяет массив на наличие элементов при удалении каждого елемента отдельно и когда будет
    // удален последний элемент, выводит сообщение Empty list.
}

ul.addEventListener('click', function (e) {
    if( e.target.classList.contains('delete-item') ){
        deleteListItem(e.target);
        dangerDiv.classList.add('alert_show');
    }
    setTimeout(() => {
        dangerDiv.classList.remove('alert_show'); // сделано для того, что бы сообщение пропадало через 2,5 секунды
    }, 2500);
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //1.Get input text
    //2.addList() || e.target.insertAdjacentElement();
    if (!inputText.value){
        inputText.classList.add('is-invalid')
    }else {
        inputText.classList.remove('is-invalid');
        addList(inputText.value);
        successDiv.classList.add('alert_show');
        form.reset();
    }
    setTimeout(() => {
        successDiv.classList.remove('alert_show'); // сделано для того, что бы сообщение пропадало через 2,5 секунды
}, 2500);

});
inputText.addEventListener('keyup', function (e) {
    if( inputText.value){
        inputText.classList.remove('is-invalid');
    }
});

generateList(tasks);


