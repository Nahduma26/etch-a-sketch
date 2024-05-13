

const container = document.querySelector(".container");

let gridCount = 0;

let nRows = 16;
let nColumns = 16;

function clearBox(elementID) { 
    var div = document.querySelector(elementID); 
     
    while(div.firstChild) { 
        div.removeChild(div.firstChild); 
    } 
} 


function showGrid()
{
    clearBox(".container");
    if (gridCount == 0)
    {
        defaultGrid();
    }
    else {
        let nRows = prompt("How many rows do you want?");
        let nColumns = prompt("How many columns do you want?");
        makeGrid(nRows, nColumns);
        let rows = document.querySelectorAll(".gridRow");
        let cells = document.querySelectorAll(".cell");
        console.log(rows.length);
        console.log(cells.length);
    }
    gridCount++;
}


function defaultGrid()
{
    makeGrid(nRows, nColumns);
    let rows = document.querySelectorAll(".gridRow");
    let cells = document.querySelectorAll(".cell");
    console.log(rows.length);
    console.log(cells.length);
}
function makeGrid(rowsCount, columnCount)
{

    for (let i = 0; i < rowsCount; i++) {
        let row = document.createElement("div");
        row.className = "gridRow";
        container.appendChild(row);
        for (let j = 0; j < columnCount; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
    }
    // for (i = 0; i < rowsCount; i++)
    // {
    //     let row = document.createElement("div");
    //     row.className = "gridRow";
    //     container.appendChild(row);
    // }
    // console.log(rows.length);
    // for (i = 0; i < rows.length; i++)
    // {
    //     for (j = 0; j < columnCount; j++)
    //     {
    //         let cell = document.createElement("div");
    //         cell.className = "cell";
    //         rows[j].appendChild(cell);
    //     }
    // }
    // console.log(cells.length);
    
}

  
  container.addEventListener(
    "mouseover",
    (event) => {
        if (!event.target.classList.contains('cell')) {
            // Stop event propagation
            event.stopPropagation();
            return;
        }
      // highlight the mouseover target
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let newColor = `rgb(${red}, ${green}, ${blue})`;
      event.target.style.background = newColor;
    },
    false,
  );