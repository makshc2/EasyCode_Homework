const Notification = (function () {
    const container = document.querySelector('.container');

    const show = function (settings) {
        hide();
        const alert = `<div class="notification ${settings.class}">${settings.text}</div>`;
        container.insertAdjacentHTML('afterbegin', alert);
        setTimeout(() => hide(), 2000);
    };

    const hide = function () {
        const currentAlert = document.querySelector('.notification');
        if (currentAlert) {
            currentAlert.remove();
        }
    };

    return {
        show,
        hide
    }
}());