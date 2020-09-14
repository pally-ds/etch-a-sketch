function createSquareDiv(squareSize) {
    let size = 960/squareSize;

    for (let i=0; i<squareSize; i++ ) {   
        for (let j=0; j<squareSize; j++ ) {
            let div = document.createElement('div');
            div.style.width = size + "px";
            div.style.height = size  + "px";
            div.classList.toggle('squareBlock');

            container.appendChild(div);

            div.addEventListener('mouseover', (e) =>{
                e.target.style.background = "black";    
            });
        }
    }
}

function resetSketchBoard(){
    let squareSize = prompt('Please enter the number of grids', '64');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    createSquareDiv(squareSize);
}


// Initialize inital parameter

let squarePerSide = 16;
const container = document.querySelector('#container');

container.style.width = "960px";
container.style.height = "960px";
container.style.border = "5px solid black";

createSquareDiv(squarePerSide);

// Add event listener on hover to the div element

//let divs = document.querySelectorAll('.squareBlock')
//divs.forEach((div) =>{
    
//    div.addEventListener('mouseover', (e) =>{
//        e.target.style.background = "black";    
//    });
//})

const btn = document.querySelector('#resetBtn');
btn.addEventListener('click', resetSketchBoard);





