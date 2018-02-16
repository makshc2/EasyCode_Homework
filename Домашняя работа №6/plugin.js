let items = JSON.parse(localStorage.getItem('items')) || [];
let table = document.querySelector('.table');
let tbody = document.querySelector('.content_item');
let form = document.forms['addItems'];
let inputName = form.elements['itemName'];
let inputPrice = form.elements['itemPrice'];
let minPrice = document.getElementById('minPrice');   
let maxPrice = document.getElementById('maxPrice');
let button = document.querySelector('.sort');
let divInfoAlert = document.querySelector('.alert_information');

function generateList(price = items) {
    let newItem = price;
    tbody.innerHTML = '';
    for (let i = 0; i < newItem.length; i++) {
        let template = `
            <tr data-id=${newItem[i].id}>
                <td>
                  ${newItem[i].name}
                </td>
                 <td>
                   ${newItem[i].price}
                   <span>
                        <i class ='fas fa-edit edit-item ml-2'></i>
                        <i class ='fas fa-trash-alt delete-item ml-1'></i>
                    </span>
                </td>          
            </tr>
                    `;
        tbody.insertAdjacentHTML('afterbegin', template);
    }
}

generateList();

function generateId() {
    let id = '';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for( let i = 0; i < 15; i++){
        let position = Math.floor(Math.random()*words.length);
        id += words[position];
    }
    return id;
}

function addList(text, number) {
    let newItems = {
        id:generateId(),
        name: text,
        price: number
    };
    items.unshift(newItems);
    localStorage.setItem('items', JSON.stringify(items));
    message({
        text: 'Item added success!',
        cssClass: 'alert-success',
        timeout: 3500
    });
    generateList();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!inputName.value  || !inputPrice.value){
        inputName.classList.add('is-invalid');
        inputPrice.classList.add('is-invalid');
    }else {
        inputName.classList.remove('is-invalid');
        inputPrice.classList.remove('is-invalid');
        addList(inputName.value, inputPrice.value);
        form.reset();
    }
});

function sort() {
    button.classList.toggle('sort');
    if (button.classList.contains('sort') === true) {
        items.sort((a, b) => a.price - b.price );
    } else {
        items.sort((a, b) => b.price - a.price );
    }
    generateList();
}

function filterCollection() {
    let arrayPrice = [];
    let min = +minPrice.value;
    let max = +maxPrice.value;
    if(!min && !max) return generateList();
    if(min > max){
        minPrice.classList.add('is-invalid');
        maxPrice.classList.add('is-invalid'); 
        return;
    } else{
        minPrice.classList.remove('is-invalid');
        maxPrice.classList.remove('is-invalid');
        for (let i = 0; i < items.length; i++) {
            let value = items[i].price;
            if( value >= min && value <= max ){
                arrayPrice.push(items[i]);
            }
        }; 
    }
    generateList(arrayPrice);
}


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
    message({
        text: 'Item delete success!',
        cssClass: 'alert-danger',
        timeout: 3500
    });
}

function editListItem(id, newValue){
    for (let i = 0; i < items.length; i++) {
        if( items[i].id === id ){
            items[i].name = newValue;
            break;
        }
    }
    localStorage.setItem('items', JSON.stringify(items));
    message({
        text: 'Item updated success!',
        cssClass: 'alert-success',
        timeout: 3500
    });
}

function message(settings) {
    divInfoAlert.classList.add(settings.cssClass);
    divInfoAlert.textContent = settings.text;
    divInfoAlert.classList.add('show');
    setTimeout(function () {
        divInfoAlert.classList.remove('show');
        divInfoAlert.classList.remove(settings.cssClass);
    }, settings.timeout);
}

table.addEventListener('click', function (e) {
    if( e.target.classList.contains('delete-item') ){
        let parent = e.target.closest('tr');
        let id = parent.dataset.id;
        deleteListItem(id);
        parent.remove();
    }else if( e.target.classList.contains('edit-item') ){
        e.target.classList.toggle('fa-save');
        let id = e.target.closest('tr').dataset.id;
        let edit = e.target.closest('tr').querySelector('td');
        if(  e.target.classList.contains('fa-save') ){
            edit.setAttribute('contenteditable', true);
            edit.focus();
        }else{
            edit.setAttribute('contenteditable', false);
            edit.blur();
            editListItem(id,edit.textContent);
        }
    }
});

