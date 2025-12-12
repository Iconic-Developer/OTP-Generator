"use strict";

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let div = document.querySelectorAll('.div');

let idOne = document.getElementById('one');
let idTwo = document.getElementById('two');


function otp(){

    let num = Math.floor(Math.random() *(10000 - 100000))+100000;
    let str = num.toString();
    
    let strOne = str.substring(0,1);
    let strTwo = str.substring(1,2);
    let strThree = str.substring(2,3);
    let strFour = str.substring(3,4);
    let strFive = str.substring(4,5);

    one.innerHTML = strOne;
    two.innerHTML = strTwo;
    three.innerHTML = strThree;
    four.innerHTML = strFour;
    five.innerHTML = strFive;
   
};

let btn = document.querySelector('.generator');
btn.addEventListener('click',otp);

