"use strict";
let ul = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

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
    liButton.addEventListener('click', myFunction);
    function myFunction () {
        ul.removeChild(li);
    }
    
}