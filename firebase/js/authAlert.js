class AuthAlert {
    constructor() {
        this.container = document.querySelector('.login-section .card');
    }
    showAlert(message) {
        this.hideAlert();

        const template = `<div class="alert alert-danger">${message}</div>`;

        this.container.insertAdjacentHTML("beforebegin", template);

        setTimeout(() => this.hideAlert(), 5000);
    }

    hideAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}