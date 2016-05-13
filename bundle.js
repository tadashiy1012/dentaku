(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var equalBtn = document.querySelector('#equal');
var clearBtn = document.querySelector('#clear');
var addBtn = document.querySelector('#add');
var subBtn = document.querySelector('#sub');
var dispIn = document.querySelector('#disp');

function none(a) {
    return parseInt(a, 10);
}

function add(a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
}

function sub(a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
}

var MODE_TYPE = {
    NONE: 0,
    ADD: 1,
    SUB: 2
};

var mode = MODE_TYPE.NONE;
var lr = true;

var left = '';
var right = '';

zero.addEventListener('click', function () {
    if (lr) {
        left += '0';
    } else {
        right += '0';
    }
});

one.addEventListener('click', function () {
    if (lr) {
        left += '1';
    } else {
        right += '1';
    }
});

two.addEventListener('click', function () {
    if (lr) {
        left += '2';
    } else {
        right += '2';
    }
});

three.addEventListener('click', function () {
    if (lr) {
        left += '3';
    } else {
        right += '3';
    }
});

four.addEventListener('click', function () {
    if (lr) {
        left += '4';
    } else {
        right += '4';
    }
});

five.addEventListener('click', function () {
    if (lr) {
        left += '5';
    } else {
        right += '5';
    }
});

six.addEventListener('click', function () {
    if (lr) {
        left += '6';
    } else {
        right += '6';
    }
});

seven.addEventListener('click', function () {
    if (lr) {
        left += '7';
    } else {
        right += '7';
    }
});

eight.addEventListener('click', function () {
    if (lr) {
        left += '8';
    } else {
        right += '8';
    }
});

nine.addEventListener('click', function () {
    if (lr) {
        left += '9';
    } else {
        right += '9';
    }
});

addBtn.addEventListener('click', function () {
    mode = MODE_TYPE.ADD;
    lr = !lr;
});

subBtn.addEventListener('click', function () {
    mode = MODE_TYPE.SUB;
    lr = !lr;
});

equalBtn.addEventListener('click', function () {
    var result = '';
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

clearBtn.addEventListener('click', function () {
    dispIn.value = '';
    left = '';
    right = '';
    rt = true;
    mode = MODE_TYPE.NONE;
});

},{}]},{},[1]);
