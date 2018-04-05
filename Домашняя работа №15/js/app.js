const tasks = Tasks.getInstance();
const ui = UI;
const localstorage = Localstorage;
const notification = Notification;
const addTaskObserver = new EventObserver();
const removeTaskObserver = new EventObserver();
const removeAllTasksObserver = new EventObserver();
const form = document.forms['addTodoItem'];
const inputText = form.elements['todoText'];
const ul = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-btn');

addTaskObserver.subscribe(localstorage.refresh);
addTaskObserver.subscribe(notification.show);
removeTaskObserver.subscribe(localstorage.refresh);
removeTaskObserver.subscribe(notification.show);
removeAllTasksObserver.subscribe(localstorage.refresh);
removeAllTasksObserver.subscribe(notification.show);

window.addEventListener('load', function (e) {
    let ls = localstorage.getTasks();
    if (ls.length) {
        ls.forEach(task => {
            tasks.addTask(task)
                .then(oneTask => ui.addTask(oneTask));
        });
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputText.value) {
        // show error, is-invalid
    } else {
        tasks.addTask({ text: inputText.value })
            .then(task => ui.addTask(task))
            .then(() => addTaskObserver.fire({
                text: 'Item added success!',
                class: 'alert alert-success'
            }));
        form.reset();
    }
});

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        let id = e.target.closest('li').getAttribute('data-id');
        tasks.removeTask(id)
            .then(() => ui.deleteTask(id))
            .then(() => removeTaskObserver.fire({
                text: 'Item delete success!',
                class: 'alert alert-danger'
            }))
    }
});

clearBtn.addEventListener('click', function (e) {
    tasks.removeAll()
        .then(() => ui.deleteAll())
        .then(() => removeAllTasksObserver.fire({
            text: 'All delete success!',
            class: 'alert alert-warning'
        }))
});