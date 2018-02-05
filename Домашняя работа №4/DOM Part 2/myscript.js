// DOM задачи
// Задача 1.
document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    function isParent(parent, child) {
        return parent.contains(child);
    }
    isParent(document.body.children[0], document.querySelector('mark'));
    isParent(document.querySelector('ul'), document.querySelector('mark'));

    // Задача 2.
    console.log(document.querySelector('a'));

    // Задача 3.
    console.log(document.querySelector('ul').previousElementSibling);
    console.log(document.querySelector('ul').nextElementSibling);

    // Задача 4.
    let mylist = document.querySelector('ul');

    console.log(mylist.childElementCount);
});

