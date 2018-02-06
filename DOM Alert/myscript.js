// DOM дополнительная задача

function showDiv(text) {
   let div = document.querySelector('.alert-info');
   div.textContent = text;
   div.classList.add('show');
   setTimeout((hideDiv) => {
       div.classList.remove('show')
   }, 2500);
}

