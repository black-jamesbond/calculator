'use strict';

const list = document.querySelectorAll('li');
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const input = document.querySelector('#input');
const submit = document.querySelector('.submit');
const btn = document.querySelectorAll('.btn');
const reset = document.querySelector('.reset');
const deleteButton = document.querySelector('#delete');

function addActive() {
    body.classList.add('active')
    body.classList.remove('more')
}

function removeActive() {
    body.classList.remove('active')
    body.classList.add('more')
}

function removeClasses() {
    body.classList.remove('active')
    body.classList.remove('more')
}

list.forEach((list) => {

    list.addEventListener('click', () => {

        if (list.textContent == 2) {
            addActive();
        } else if(list.textContent == 3) {
            removeActive();
        } else {
            removeClasses()
        }

    });
});




input.value = '';
btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.textContent;
    })
})

submit.addEventListener('click', () => {
    let answer = eval(input.value);
    input.value = answer;
})

reset.addEventListener('click', () => {
    input.value = '';
})

deleteButton.addEventListener('click', () => {
   let remove = input.value.slice(0, input.value.length - 1);
   input.value = remove;
})



