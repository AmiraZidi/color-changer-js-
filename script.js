var color = document.getElementById("input");
var box = document.getElementById("color-box");
var btn = document.getElementById("change-color-btn");

// function getRandomColor() {
//     box.style.backgroundColor = color.value ; 
//     btn.style.color = color.value ;
//     console.log(color.value)
// }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var clr = '#';
    for (var i = 0; i < 6; i++) {
      clr += letters[Math.floor(Math.random() * 16)];
    }
    return clr;
}

function setRandomColor() {
box.style.backgroundColor = getRandomColor() ;
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});