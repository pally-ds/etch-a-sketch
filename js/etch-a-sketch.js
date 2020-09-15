function createSquareDiv(squarePerSide = 16) {
    let size = 960/squarePerSide;
    let numOfGrid = squarePerSide**2;

    for (let i=0; i<numOfGrid; i++ ) {   
        let div = document.createElement('div');
        div.style.width = size + "px";
        div.style.height = size  + "px";
        div.classList.toggle('squareBlock');

        container.appendChild(div);

        // Add event listener to newly created element
        div.addEventListener('mouseover', (e) =>{
            e.target.style.background = "black";    
        });
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
const container = document.querySelector('#container');
createSquareDiv();


// Add event listener on hover to the div element
const btn = document.querySelector('#resetBtn');
btn.addEventListener('click', resetSketchBoard);





