const allTasks = Tasks.getInstance();

const Localstorage = (function () {
    const update = function () {
        localstorage.setItem('tasks', JSON.stringify(allTasks.getTasks()));
    };

    const getTasks = function () {
        return JSON.parse(localstorage)
    }
    return{
        update
    }
}())