const UI = (function () {

    const ul = document.querySelector('.list-group');
    const alert = document.querySelector('.empty-alert');

    const listTemplate = function (task) {
        let li = document.createElement('li');
        li.textContent = task.text;
        li.className = 'list-group-item d-flex align-items-center';
        li.setAttribute('data-id', task.id)
        let iDelete = document.createElement('i');
        iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
        li.appendChild(iDelete);
        return li;
    };

    const addTask = function (task) {
        ul.insertAdjacentElement('afterbegin',listTemplate(listTemplate(task)));
    };

    const deleteTask = function (id) {
        let li = ul.querySelector(`[data-id="${id}"]`);
        li.remove();
    };
    
    const deleteAll = function () {
        ui.innerHTML = '';
    };

    return{
        addTask,
        deleteTask,
        deleteAll
    }

}());