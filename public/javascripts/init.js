'use strict';


const input_btn = document.querySelector('#input_btn');
const reset_btn = document.querySelector('#reset_btn');
const menu = document.querySelector('#input_menu');
const result = document.querySelector('#result');
input_btn.addEventListener('click', () => {

    if (!result.innerHTML) {
        result.innerHTML = menu.value;
    } else {
        result.innerHTML += `, ${menu.value}`;
    }

    menu.value = '';
});

reset_btn.addEventListener('click', () => {
    if (!result.innerHTML) {
        return;
    }
    const isConfirm = confirm('입력한 메뉴를 초기화 할까요?');
    if (isConfirm) {
        result.innerHTML = '';
    }
});