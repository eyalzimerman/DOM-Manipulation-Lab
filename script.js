"use strict";
let ul = document.getElementsByTagName('ul');
let input = document.getElementsByTagName('input');
let button = document.getElementsByTagName('button');

button.onclick = function() {
    let myInput = input.value;
    input.value = '';

    let li = document.createElement('li');
    let span = document.createElement('span');
    let liButton = document.createElement('button');

    li.appendChild(span);
    li.appendChild(liButton);
    span.textContent = myInput;
    liButton.textContent = 'Delete';
    ul.appendChild(li);
}