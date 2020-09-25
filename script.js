console.log('test')
let createButton = document.getElementById('create-button');
let rgbButton = document.getElementById('rgb-button');
let gridContainer = document.getElementById('grid-container')
let userInput = ''
let child_nodes = 0;
let gridStyleCheck;
let gridTemplateRows = "";
let gridTemplateColumns = "";

createButton.addEventListener('click', function () {createGrid()});
rgbButton.addEventListener('click', function () {createRGBGrid()});

function randomColor () {
  return Math.floor(Math.random() * 255);
}
function newRGB () {
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
}

function removeAllChildNodes () {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createGrid () {
  if (gridContainer.firstChild) {
    removeAllChildNodes();
    gridTemplateRows = '';
    gridTemplateColumns = '';
  }

  userInput = +prompt('How many rows and columns?');
  while (userInput > 64) {
    userInput = +prompt('Can not have more than 64 rows/columns. Enter a new number')
  }

  for (let i = 0; i < userInput; i++) {
    gridTemplateColumns += "1fr ";
    gridTemplateRows += "1fr ";
  }
  gridContainer.style.gridTemplateRows = gridTemplateRows;
  gridContainer.style.gridTemplateColumns = gridTemplateColumns;

  let expoUserInput = userInput * userInput;
  for (let i = 0; i < expoUserInput; i++) {
    let blockDiv = document.createElement('div');
    blockDiv.classList.add(`gridNum`);
    blockDiv.classList.add(`gridNum${i+1}`);
    gridContainer.appendChild(blockDiv);
  }

  gridContainer.addEventListener('hover', function() {
    return this.classLis
  })
}


function createRGBGrid () {
  if (gridContainer.firstChild) {
    removeAllChildNodes();
    gridTemplateRows = '';
    gridTemplateColumns = '';
  }

  userInput = +prompt('How many rows and columns?');
  while (userInput > 64) {
    userInput = +prompt('Can not have more than 64 rows/columns. Enter a new number')
  }

  for (let i = 0; i < userInput; i++) {
    gridTemplateColumns += "1fr ";
    gridTemplateRows += "1fr ";
  }
  gridContainer.style.gridTemplateRows = gridTemplateRows;
  gridContainer.style.gridTemplateColumns = gridTemplateColumns;

  let expoUserInput = userInput * userInput;
  for (let i = 0; i < expoUserInput; i++) {
    let blockDiv = document.createElement('div');
    blockDiv.classList.add(`gridNum`);
    blockDiv.classList.add(`gridNum${i+1}`);
    gridContainer.appendChild(blockDiv);
  }

  child_nodes = gridContainer.childNodes.length;
  for (let i = 0; i < child_nodes; i++) {
    gridStyleCheck = document.getElementsByClassName(`gridNum${i+1}`);
    gridStyleCheck[0].style.backgroundColor = newRGB();
  }

}



//gridContainer.addEventListener('mouseover', function() {
//  console.log(this)
//})
