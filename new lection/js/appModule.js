const tasks = Tasks.getInstance();
const ui = UI;
const localstorage = Localstorage;
const notification = Notification;
const addTaskObservers = new EventObserver();
addTaskObservers.subscribe(localstorage.update);
addTaskObservers.subscribe(notification.show)
const form = document.forms['addTodoItem'];
const inputText = form.elements['todoText'];
const ul = document.querySelector('.list-group');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(!inputText.value){

    }else{
       tasks.addTask({text: inputText.value})
           .then(task => ui.addTask(task))
           .then(() => addTaskObservers.fire({
               text: 'Добавленна успешно',
                class:'alert alert-success'
           }));
    }
});

ul.addEventListener('click', function (e) {
    if(e.target.classList.contains('delete-item')){
        let id = e.target.closest('li').getAttribute('data-id')
        tasks.removeTask(id)
            .then(() => ui.deleteTask(id));
    }
});