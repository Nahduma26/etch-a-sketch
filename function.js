const container = document.querySelector(".container");

let nRows = 16;
let nColumns = 16;


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