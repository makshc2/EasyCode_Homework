const tasks = Tasks.getInstance();
const ui = UI;
const localstorage = Localstorage;
const notification = Notification;

const addTaskObserver = new EventObserver();
const removeTaskObserver = new EventObserver();
const removeAllTaskObserver = new EventObserver();
const editTaskObserver = new EventObserver();

addTaskObserver.subscribe(localstorage.update);
addTaskObserver.subscribe(notification.show);

removeTaskObserver.subscribe(localstorage.update);
removeTaskObserver.subscribe(notification.show);

removeAllTaskObserver.subscribe(localstorage.update);
removeAllTaskObserver.subscribe(notification.show);

const form = document.forms['addTodoItem'];
const inputText = form.elements['todoText'];
const ul = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-btn');

window.addEventListener('load', function (e) {
    let ls = localstorage.getTasks();
    if(ls.length){
        ls.forEach(task => {
            tasks.addTask(task)
                .then(oneTask => ui.addTask(oneTask));
        });
    };
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(!inputText.value){

    }else{
        tasks.addTask({
            text: inputText.value
        })
            .then(task => ui.addTask(task))
            .then(() => addTaskObserver.fire({
                text: 'Item updated success!',
                cssClass: 'alert-success'
            }));
    }
});

ul.addEventListener('click', function (e) {
    if(e.target.classList.contains('delete-item')){
        let id = e.target.closest('li').getAttribute('data-id');
        tasks.removeTask(id)
            .then(() => ui.deleteTask(id))
            .then(() => removeTaskObserver.fire({
                text: 'Item delete success!',
                cssClass: 'alert-danger'
            }));
    };
});

clearBtn.addEventListener('click', function (e) {
    tasks.removeAll()
        .then(() => ui.deleteAll())
        .then(() => removeAllTaskObserver.fire({
            text: 'All item delete success!',
            cssClass: 'alert-warning',
        }));
});