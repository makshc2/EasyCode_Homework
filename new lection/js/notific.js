const Notification = (function () {
    const show = function (message) {
        const alert = `<div class="${message.class}">${message.text}</div>`
        container.insertAdjacentHTML('afterbegin', alert);

        setTimeout(() => hide(), 2000);
    }

    const hide = function () {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    return{
        show
    }
}())