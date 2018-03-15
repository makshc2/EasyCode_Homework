// task #1

function promiseCreator(timeOut, value) {
    return new Promise( res => setTimeout(() => res(value),timeOut));
}
const prom = promiseCreator(500, 'OK!');
prom.then(console.log);

//task #2

const ul = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts',{method: 'GET'})
    .then(response => {
        return response.json()
    })
    .then(json => {
        json.forEach(item => {
            ul.insertAdjacentHTML('beforebegin', `<li class="list-group-item">${item.id} ${item.title}</li>`);

        });
    })
    .catch(err => console.log(err));

//task #3

const totalData = {
    'posts': {},
    'users': {}
};

let postsAll = fetch('https://jsonplaceholder.typicode.com/posts',{method: 'GET'})
    .then(res => res.json());
let usersAll = fetch('https://jsonplaceholder.typicode.com/users',{method: 'GET'})
    .then(res => res.json());

Promise.all([postsAll, usersAll])
    .then(data => {
        dataTotal['posts'] = data[0];
        dataTotal['users'] = data[1];

        return dataTotal
    })
    .then(data => {
        console.log(`total posts: ${data.posts.length}`);
        console.log(`total users: ${data.users.length}`);
    })
    .catch(err => console.log(err));