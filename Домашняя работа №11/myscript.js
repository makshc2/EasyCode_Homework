// task #1

function promiseCreator(timeOut, value) {
    return new Promise( res => setTimeout(() => res(value),timeOut));
}
const prom = promiseCreator(500, 'OK!');
prom.then(console.log);
