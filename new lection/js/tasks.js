const id = Id;

const Tasks = (function () {
    let tasks =[];
    let instance;

    const getTasks = function () {
        return tasks;
    }

    const setTasks = function (array) {
        tasks = array;
        return tasks;
    }

    const addTask = async function (task) {
        task.id = id.generate();
        await tasks.unshift(task);
        return task;
    }

    const deleteTask = function (id) {
        const li =  tasks.filter(task => task.id !== id);
    }

    const createInstance = function () {
        return {
            getTasks,
            setTasks,
            addTask,
            removeTask
        }
    }

    return{
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }

}());