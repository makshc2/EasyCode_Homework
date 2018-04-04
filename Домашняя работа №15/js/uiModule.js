const UI = (function () {

    const ul = document.querySelector('.list-group');

    const listTemplate = function (task) {
        let li = document.createElement('li');
        li.textContent = task.text;
        li.setAttribute('data-id', task.id);
        li.className = 'list-group-item d-flex align-items-center';
        let iDelete = document.createElement('i');
        iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
        li.appendChild(iDelete);
        return li;
    };

    const addTask = function (task) {
        ul.insertAdjacentElement('afterbegin', listTemplate(task));
    };

    const deleteTask = function (id) {
        const li = ul.querySelector(`[data-id="${id}"]`);
        li.remove();
    };

    const deleteAll = function () {
        ul.innerHTML = '';
    };

    return {
        addTask,
        deleteTask,
        deleteAll
    }

}());