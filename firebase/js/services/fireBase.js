const Firebase = (function () {

    const config = {
        apiKey: "AIzaSyApQ1AkDD2K8sINvAuUmLVgRjd64sUnIIM",
        authDomain: "myapp-6a0a7.firebaseapp.com",
        databaseURL: "https://myapp-6a0a7.firebaseio.com",
        projectId: "myapp-6a0a7",
        storageBucket: "myapp-6a0a7.appspot.com",
        messagingSenderId: "888084437073"
    };

    firebase.initializeApp(config);

    const db = firebase.firestore();

    let instance;

    const getDb = function () {
        return db;
    };

    const createInstance = function () {
        return {
            getDb
        }
    };

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }
    
}());