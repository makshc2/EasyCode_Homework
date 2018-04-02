const items = JSON.parse(localStorage.getItem('items')) || [];
const table = document.querySelector('.table');
const tbody = document.querySelector('.content_item');
const form = document.forms['addItems'];
const inputName = form.elements['itemName'];
const inputPrice = form.elements['itemPrice'];
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const button = document.querySelector('.sort');
const divInfoAlert = document.querySelector('.alert_information');

class Observer {

    constructor(){
        this.observers = [];
    }

    subscribe (fn){
        this.observers.push(fn);
    }

    unsubscribe (fn){
        this.observers = this.observers.filter(subscribe => subscribe != fn);
    }

    broadcast (data){
        this.observers.forEach(subscribe => subscribe(data));
    }

}

const moduleItem = (function () {
   let flag = true;
   const observer = new Observer();
   observer.subscribe(message);

   function init() {
       generateList(price = items);
   }
   
   function clearList() {
       tbody.innerHTML = '';
   }

   function getTemplate(items) {
       let template = `<tr data-id=${newItem[i].id}>
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
            </tr>`;
       return template;
   }

    function generateId() {
        let id = '';
        const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        for( let i = 0; i < 15; i++){
            let position = Math.floor(Math.random()*words.length);
            id += words[position];
        }
        return id;
    }
    
    function generateList(price = items) {
        clearList();
        price.forEach((items) => {
            let template = getTemplate(items);
            tbody.insertAdjacentHTML('afterbegin', template);
        })
        sort();
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

    function  deleteListItem(id) {
        for ( let i = 0; i < items.length; i++ ) {
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
        for ( let i = 0; i < items.length; i++ ) {
            if(items[i].id === id){
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

    table.addEventListener('click', function (e) {
        if(e.target.classList.contains('delete-item')){
            let parent = e.target.closest('tr');
            let id = parent.dataset.id;
            deleteListItem(id);
            parent.remove();
        }else if(e.target.classList.contains('edit-item')){
            e.target.classList.toggle('fa-save');
            let id = e.target.closest('tr').dataset.id;
            let edit = e.target.closest('tr').querySelector('td');
            if(e.target.classList.contains('fa-save')){
                edit.setAttribute('contenteditable', true);
                edit.focus();
            }else{
                edit.setAttribute('contenteditable', false);
                edit.blur();
                editListItem(id,edit.textContent);
            }
        }
    });

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
            for ( let i = 0; i < items.length; i++ ) {
                let value = items[i].price;
                if( value >= min && value <= max ){
                    arrayPrice.push(items[i]);
                }
            };
        }
        generateList(arrayPrice);
    }

    function sort() {
        button.classList.toggle('sort');
        if (button.classList.contains('sort') === true) {
            items.sort((a, b) => a.price - b.price );
        } else {
            items.sort((a, b) => b.price - a.price );
        }
        generateList();
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
    return{
        init,
        getTemplate
    }
})();