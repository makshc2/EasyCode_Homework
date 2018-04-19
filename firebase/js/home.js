// Auth init
const auth = new Auth();

// Init User
const user = User.getInstance().getUser();

// Init elements
const signOut = document.querySelector('.sign-out');

// Check Auth
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) window.location = 'login.html';
});

signOut.addEventListener('click', function (e) {
    auth.signout()
        .then(status => {
            if (status) {
                window.location = 'login.html';
            }
        })
        .catch(error => {
            console.log(error);
        })
});