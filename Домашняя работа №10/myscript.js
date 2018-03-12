ajax.send({
    method: 'GET',
    url:'https://jsonplaceholder.typicode.com/todos',
    success: function (res) {
        let tasks = JSON.parse(res);
        generateList(tasks);
    },
    error: function (err) {
        console.log(err);
    }
});

const ul = document.querySelector('.list-group');
const form = document.forms['addTodoItem'];
const inputText = form.elements['todoText'];
const infoAlert = document.getElementById('infoAlert');

function getTemplate(object) {
    const template = `<li data-id=${object.id} class="${object.completed ? "bg-success" : "bg-danger"} list-group-item d-flex align-items-center" >
            <span class="taskName">${object.title}</span>
            <span class="management ml-auto">
                <i class="fas fa-edit edit-itm editItem"></i>
                <i class="fas fa-trash ml-2 deleteItem"></i>
            </span>
        </li>`;
    return template;
}

function message(settings) {
    infoAlert.classList.toggle('d-none');
    infoAlert.classList.add(settings.cssClass);
    infoAlert.textContent = settings.text;
    setTimeout(function () {
        infoAlert.classList.toggle('d-none');
        infoAlert.classList.toggle(settings.cssClass)
    }, settings.timeout);
}

function generateList(response) {
    ul.innerHTML = '';
    for (let i = 0; i < response.length; i++) {
        ul.insertAdjacentHTML('afterbegin', getTemplate(response[i]));
    }
}

function generateListTask(object) {
    ul.insertAdjacentHTML('afterbegin', getTemplate(object));
}

function deleteListItem(item) {
    const taskId = item.closest('li').dataset['id'];

    ajax.send({
        method: 'DELETE',
        url:`https://jsonplaceholder.typicode.com/todos/${taskId}`,
        success: function (res) {
            message({
                text: 'Task has been removed success!',
                cssClass: 'alert-warning',
                timeout: 2000
            });
        },
        error: function (err) {
            console.log(err)
        }
    });

}

function editListItem(item) {
    const parent = item.closest('li');
    const taskId = parent.dataset['id'];
    const content = parent.querySelector('.taskName');

    if (item.classList.contains('fa-save')){
        content.setAttribute('contenteditable', true);
        content.focus();
    } else {
        content.setAttribute('contenteditable', false);

        ajax.send({
            method: 'PATCH',
            url: `https://jsonplaceholder.typicode.com/todos/${taskId}`,
            data: JSON.stringify({
                title: content.textContent,
                completed: parent.classList.contains('bg-success')
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            success: function (res) {
                console.log(res)
            },
            error: function (err) {
                console.log(err)
            }
        });

    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputText.value) {
        inputText.classList.add('is-invalid');
    } else {
        let data = {
            title: inputText.value,
            completed: false
        };

        ajax.send({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/todos',
            data: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            success: function (res) {
                let response = JSON.parse(res);
                generateListTask(response);
                message({
                    text: 'Task added success',
                    cssClass: 'alert-success',
                    timeout: 2000
                })
            },
            error: function (err) {
                console.log(err)
            }
        });

        inputText.classList.remove('is-invalid');
        form.reset();
    }

});

ul.addEventListener('click', function (e) {
    const parent = e.target.closest('li');

    if (e.target.classList.contains('editItem')){
        e.target.classList.toggle('fa-save');
        editListItem(e.target);
    } else if (e.target.classList.contains('deleteItem')){
        parent.remove();
        deleteListItem(e.target);
    }

});