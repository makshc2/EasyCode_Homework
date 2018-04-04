const allTasks = Tasks.getInstance();

const Localstorage = (function () {

    const refresh = function () {
        localStorage.setItem('tasks', JSON.stringify(allTasks.getTasks()));
    };

    const getTasks = function () {
        return JSON.parse(localStorage.getItem('tasks'));
    };

    return {
        refresh,
        getTasks
    }

}());