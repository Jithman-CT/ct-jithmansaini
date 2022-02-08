

const boxes = document.querySelectorAll(".image-box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");

const letters = '0123456789ABCDEF';
let color1 = '#';
let color2 = '#';
let color3 = '#';
let color4 = '#';
let color5 = '#';

// change bg on load
function onLoad() {
    box1.style.backgroundColor = color1;
    box2.style.backgroundColor = color2;
    box3.style.backgroundColor = color3;
    box4.style.backgroundColor = color4;
    box5.style.backgroundColor = color5;
}

// add class active
boxes.forEach((box) => {

    box.addEventListener('click', function () {

        removeClass()

        box.classList.add('active');
    })
})

// remove active class from all of the boxes
function removeClass() {
    boxes.forEach((box) => {
        box.classList.remove('active');
    })
}

// genrate random color 1

function getRandomColor() {
    for (var i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
    }
    return color1;
}
// genrate random color 2

function getRandomColor2() {
    for (var i = 0; i < 6; i++) {
        color2 += letters[Math.floor(Math.random() * 16)];
    }
    return color2;
}

// genrate random color 3

function getRandomColor3() {
    for (var i = 0; i < 6; i++) {
        color3 += letters[Math.floor(Math.random() * 16)];
    }
    return color3;
}

// genrate random color 4

function getRandomColor4() {
    for (var i = 0; i < 6; i++) {
        color4 += letters[Math.floor(Math.random() * 16)];
    }
    return color4;
}

// genrate random color 5

function getRandomColor5() {
    for (var i = 0; i < 6; i++) {
        color5 += letters[Math.floor(Math.random() * 16)];
    }
    return color5;
}



getRandomColor();
getRandomColor2();
getRandomColor3();
getRandomColor4();
getRandomColor5();
// console.log(box1.style.backgroundColor = color1)
console.log(color1, color2, color3, color4, color5);
