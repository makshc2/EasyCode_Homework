// DOM задачи
// Задача 1.

    let isParent = (parent, child) => {
        let parentElement = child.parentElement;
        while (parentElement !== document) {
            if(parentElement === parent) return true;
            parentElement = parentElement.parentElement;
        }
        return false;
    };
    isParent(document.body.children[0], document.querySelector('mark'));
    isParent(document.querySelector('ul'), document.querySelector('mark'));

    // Задача 2.
    console.log(document.querySelector('div').getElementsByTagName('a'));

    // Задача 3.
    console.log(document.querySelector('ul').previousElementSibling);
    console.log(document.querySelector('ul').nextElementSibling);

    // Задача 4.
    let mylist = document.querySelector('ul');
    console.log(mylist.childElementCount);

