const Firebase = (function () {

    const config = {
        apiKey: "AIzaSyDGnHvMQUSd6tvjWHbCexBlgt5Tt98_Wck",
        authDomain: "portfolio-3b37d.firebaseapp.com",
        databaseURL: "https://portfolio-3b37d.firebaseio.com",
        projectId: "portfolio-3b37d",
        storageBucket: "portfolio-3b37d.appspot.com",
        messagingSenderId: "363567904777"
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