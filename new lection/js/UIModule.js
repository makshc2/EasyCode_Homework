const UI = (function () {
    const ul = document.querySelector('.list-group');
    const emptyAlert = document.

    const listTemplate = function(task){
        let li = document.createElement('li');
        li.textContent = task.text;
        li.setAttribute('data-id', task.id);
        li.className = 'list-group-item d-fkex align-items-center';
        let iDelete = document.createElement('i');
        iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
        li.appendChild(iDelete);
        return li;
    }



})