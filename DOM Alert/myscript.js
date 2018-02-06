// DOM дополнительная задача

function showDiv(text) {
   let div = document.querySelector('.alert-info');
   let buttons = document.querySelector('.button')
   div.textContent = text;
   div.classList.add('show');
   buttons.classList.add('hidden')
   setTimeout((hideDiv) => {
       div.classList.remove('show')
       buttons.classList.remove('hidden')
   }, 2500);
   
   //вызов функции привязан к кнопке с классом btn-danger (небольшая модификация от себя:))

