let gridContainer = document.getElementById('grid-container')

console.log('test')

let userInput = +prompt('Enter a number');

for (let i = 0; i < userInput; i++) {
  if (i >= 20) {
    break;
  }
  var testDiv = document.createElement('div');
  testDiv.classList.add(`gridNum`);
  testDiv.classList.add(`gridNum${i+1}`);
  gridContainer.appendChild(testDiv);
}

function randomColor () {
  return Math.floor(Math.random() * 255);
}
function newRGB () {
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
}

let child_nodes = gridContainer.childNodes.length;
let gridStyleCheck;

for (let i = 1; i < child_nodes; i++) {

  gridStyleCheck = document.getElementsByClassName(`gridNum${i}`);
  gridStyleCheck[0].style.backgroundColor = newRGB();
}
