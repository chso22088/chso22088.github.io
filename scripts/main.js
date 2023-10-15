const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/yaruki_moeru_man.png") {
    myImage.setAttribute("src", "images/yaruki_moeru_woman.png");
  } else {
    myImage.setAttribute("src", "images/yaruki_moeru_man.png");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {

  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'やる気が満ち溢れてる人　' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'やる気が満ち溢れてる人　' + storedName;
}

myButton.onclick = function() {
  setUserName();
}