const User = (function () {

    let currentUser;
    let instance;

    const getUser = async function () {
        return currentUser
    };

    const createInstance = function () {
        return {
            getUser
        }
    };

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }

})();