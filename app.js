'use strict';

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const dispIn = document.querySelector('#disp');

function none(a) {
    return parseInt(a, 10);
}

function add(a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
}

function sub(a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
}

const MODE_TYPE = {
    NONE: 0,
    ADD: 1,
    SUB: 2
};

let mode = MODE_TYPE.NONE;
let lr = true;

let left = '';
let right = '';

zero.addEventListener('click', () => {
    if (lr) {
        left += '0';
    } else {
        right += '0';
    }
});

one.addEventListener('click', () => {
    if (lr) {
        left += '1';
    } else {
        right += '1';
    }
});

two.addEventListener('click', () => {
    if (lr) {
        left += '2';
    } else {
        right += '2';
    }
});

three.addEventListener('click', () => {
    if (lr) {
        left += '3';
    } else {
        right += '3';
    }
});

four.addEventListener('click', () => {
    if (lr) {
        left += '4';
    } else {
        right += '4';
    }
});

five.addEventListener('click', () => {
    if (lr) {
        left += '5';
    } else {
        right += '5';
    }
});

six.addEventListener('click', () => {
    if (lr) {
        left += '6';
    } else {
        right += '6';
    }
});

seven.addEventListener('click', () => {
    if (lr) {
        left += '7';
    } else {
        right += '7';
    }
});

eight.addEventListener('click', () => {
    if (lr) {
        left += '8';
    } else {
        right += '8';
    }
});

nine.addEventListener('click', () => {
    if (lr) {
        left += '9';
    } else {
        right += '9';
    }
});

addBtn.addEventListener('click', () => {
    mode = MODE_TYPE.ADD;
    lr = !lr;
});

subBtn.addEventListener('click', () => {
    mode = MODE_TYPE.SUB;
    lr = !lr;
});

equalBtn.addEventListener('click', () => {
    let result = '';
    switch (mode) {
        case MODE_TYPE.ADD:
            result = add(left, right);
            break;
        case MODE_TYPE.SUB:
            result = sub(left, right);
            break;
        default:
            result = none(left + right);
    }
    dispIn.value = result;
    left = '';
    right = '';
    lr = true;
    mode = MODE_TYPE.NONE;
});

clearBtn.addEventListener('click', () => {
    dispIn.value = '';
    left = '';
    right = '';
    rt = true;
    mode = MODE_TYPE.NONE;
});