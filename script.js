let bwButton = document.getElementById('create-button');
let rgbButton = document.getElementById('rgb-button');
let gridContainer = document.getElementById('grid-container')
let child_nodes = 0;
let gridStyleCheck;
let gridTemplateRows = "";
let gridTemplateColumns = "";
let userInput = 4;
    

bwButton.addEventListener('click', function () {createBWGrid()});
rgbButton.addEventListener('click', function () {createRGBGrid()});


function chooseGridSize () { 
  userInput = +prompt('How many rows and columns?');
  while (userInput > 64) {
    userInput = +prompt('Can not have more than 64 rows/columns. Enter a new number')
  }
}

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

function createBWGrid () {
  if (gridContainer.firstChild) {
    removeAllChildNodes();
    gridTemplateRows = '';
    gridTemplateColumns = '';
  }

  chooseGridSize();
  
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
    gridStyleCheck = document.getElementsByClassName(`gridNum${i + 1}`);
    gridStyleCheck[0].style.backgroundColor = 'rgba(0,0,0,0.0)';
  }

  const divs = document.querySelectorAll('div')
  function changeOpacity (e) {
    let currentOpacity = this.style.backgroundColor.charAt(16);
    let newOpacity = +currentOpacity + 1;
    if (newOpacity == 9) {
      this.style.backgroundColor = 'black'
    }
    if (this.stylebackgroundColor == 'rgba(0,0,0,0') {
      this.style.backgroundColor = 'rgba(0,0,0,0.1)'
    }
    if (currentOpacity <= 8) {
      this.style.backgroundColor = `rgba(0,0,0,0.${newOpacity})`
      console.log(newOpacity)
    }
  }
  divs.forEach(div => div.addEventListener('mouseover', changeOpacity));

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
    blockDiv.classList.add(`rgbNum${i+1}`);
    blockDiv.classList.add(`rgbNum`);
    gridContainer.appendChild(blockDiv);
  }

  child_nodes = gridContainer.childNodes.length;
  for (let i = 0; i < child_nodes; i++) {
    rgbStyleCheck = document.getElementsByClassName(`rgbNum${i+1}`);
  //  rgbStyleCheck[0].style.backgroundColor = newRGB();
  // this will add back generating random RGB for each section on grid creation
  }


  const gridNums = document.querySelectorAll('div')
  function changeColor (e) {
    this.style.backgroundColor = `${newRGB()}`
  }
  gridNums.forEach(div => div.addEventListener('mouseover', changeColor, {capture: false}));

}
