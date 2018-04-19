// Auth init
const auth = new Auth();

// Alert Init
const alert = new AuthAlert();

// Init User
// const user = User.getInstance();

// Init elements
const form = document.forms['login-form'];
const emailInput = form.elements['email'];
const passwordInput = form.elements['password'];

// Check Auth
firebase.auth().onAuthStateChanged(function(user) {
    if (user) window.location = 'home.html';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(emailInput.value && passwordInput.value) {
        auth.login(emailInput.value, passwordInput.value)
            .then(() => {
                window.location = 'home.html';
            })
            .catch(({code, message}) => alert.showAlert(message));
    }
});

