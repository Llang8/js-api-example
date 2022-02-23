let todoBtn = document.getElementById('todoBtn');
let todoItemField = document.getElementById('todoItemField');
let todoList = document.getElementById('todoList');
let todoForm = document.getElementById('todoForm');
let listGroupItems = document.getElementsByClassName('list-group-item');


// console.log(todoBtn);
// console.log(listGroupItems);

Array.prototype.slice.call(listGroupItems).forEach(element => console.log(element))
// listGroupItems.forEach(element => console.log(element))

// let todoBtn = document.querySelector('#todoBtn')
// let todoItemField = document.querySelector('#todoItemField')
// let todoList = document.querySelector('#todoList')
// // let todoFormStuff = document.querySelector('#todoForm')
// let hrTag = document.querySelector('.qwerty');
// console.log(hrTag);

// let todoFormStuff = document.querySelector('#todoForm')

// let listGroupItems = document.querySelectorAll('.list-group-item');
// listGroupItems.forEach(element => console.log(element));

// console.log();
// for (const element of listGroupItems) {
//     console.log(element);
// }
// listGroupItems.forEach(element => {
//     console.log(element);
// })

// todoForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // create the list element from scratch using JS
//     let listEl = document.createElement('li');
//     listEl.classList.add('list-group-item');
//     listEl.innerText = `${ event.target[ 0 ].value }`;

//     listEl.addEventListener('mouseover', function (e) {
//         if(!listEl.classList.contains('disabled')) {
//             listEl.classList.add('active');
//         }
//     });

//     listEl.addEventListener('mouseout', function (e) {
//         listEl.classList.remove('active');
//     });
    
//     listEl.addEventListener('click', function() {
//         listEl.classList.remove('active');
//         listEl.classList.toggle('disabled');
        
//     })

//     todoList.appendChild(listEl);
//     event.target[ 0 ].value = '';

// });

function handleTodo(e) {
    e.preventDefault();

    // create the list element from scratch using JS
    let listEl = document.createElement('li');
    listEl.classList.add('list-group-item');
    listEl.innerText = `${ e.target[ 0 ].value }`;

    listEl.addEventListener('mouseover', function (e)
    {
        if (!listEl.classList.contains('disabled'))
        {
            listEl.classList.add('active');
        }
    });

    listEl.addEventListener('mouseout', function (e)
    {
        listEl.classList.remove('active');
    });

    listEl.addEventListener('click', function ()
    {
        listEl.classList.remove('active');
        listEl.classList.toggle('disabled');

    })

    todoList.appendChild(listEl);
    e.target[ 0 ].value = '';
}