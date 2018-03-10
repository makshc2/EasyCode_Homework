
let tasks = [
  "Выучить Java Script",
  "Выучить Angular 4",
  "Сходить на Kharkiv CSS#3",
  "Выучить функции",
];


let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let successDiv = document.querySelector('.alert-success');
let dangerDiv = document.querySelector('.alert-danger');
let clearListDiv = document.querySelector('.alert-danger_clearlist');
let divInfoClearList = document.querySelector('.alert-info');


function alertInfo() {
    if(tasks.length === 0){
        divInfoClearList.classList.add('alert_show')
    }else{
        divInfoClearList.classList.remove('alert_show');
    }
};
alertInfo(tasks);


function deleteAlertInfo() {
    setTimeout(() => {
        clearListDiv.classList.remove('alert_show');
        dangerDiv.classList.remove('alert_show');
        successDiv.classList.remove('alert_show');
    }, 2500);
}


function listTemplate(task) {
    alertInfo(tasks);
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex align-items-center';
    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
    li.appendChild(iDelete);
    return li;
}


function clearList() {
    ul.innerHTML = '';
    tasks.splice(0, tasks.length);
    alertInfo(tasks);
    clearListDiv.classList.add('alert_show');
    deleteAlertInfo();
}


function generateList(tasksArray) {
    ul.innerHTML = '';
    for ( let i = 0; i < tasks.length; i++ ) {
        let li = listTemplate (tasksArray[i]);
        ul.appendChild(li);
    }
}


function addList(list) {
    tasks.unshift(list);
    ul.insertAdjacentElement('afterbegin',listTemplate(inputText.value));
}

function  deleteListItem(target) {
    let parent = target.closest('li');
    console.log(parent);
    let index = tasks.indexOf(parent.textContent);
    tasks.splice(index, 1);
    parent.remove();
    alertInfo(tasks);
}

ul.addEventListener('click', function(e) {
    if( e.target.classList.contains('delete-item') ){
        deleteListItem(e.target);
        dangerDiv.classList.add('alert_show');
    }
    deleteAlertInfo();
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!inputText.value){
        inputText.classList.add('is-invalid')
    }else {
        inputText.classList.remove('is-invalid');
        addList(inputText.value);
        successDiv.classList.add('alert_show');
        form.reset();
    }
    deleteAlertInfo();

});
inputText.addEventListener('keyup', function (e) {
    if(inputText.value){
        inputText.classList.remove('is-invalid');
    }
});

generateList(tasks);


