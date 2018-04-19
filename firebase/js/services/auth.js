class Auth {
    async login(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            return Promise.reject(error);
        });
    }

    async signout() {
        return await firebase.auth().signOut().then(function() {
            // Sign-out successful.
            return true;
        }).catch(function(error) {
            // An error happened.
            return Promise.reject(error);
        });
    }
}