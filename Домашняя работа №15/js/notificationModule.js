const Notification = (function () {

    const container = document.querySelector('.container');

    const show = function (settings) {
        hide();

        const divInfoAlert = `<div class="notification ${settings.class}">${settings.text}</div>`;
        container.insertAdjacentHTML('afterbegin', divInfoAlert);

        setTimeout(() => {
            hide();
        }, 2000)
    }

    const hide = function () {
        const deleteAlert = document.querySelector('.notification');
        if(deleteAlert){
            deleteAlert.remove();
        }
    };

    return{
        show
    }

}());