// Create a function which takes the number of square grid.
// Create the div box within the container similar to the number of square grid

function createSquareDiv() {
    const div = document.createElement('div');
    let size = 960/squarePerSide;

    for (let i=0; i<squarePerSide; i++ ) {   
        for (let j=0; j<squarePerSide; j++ ) {
            const div = document.createElement('div');
            div.style.width = size + "px";
            div.style.height = size + "px";
            div.classList.toggle('squareBlock');

            container.appendChild(div);
        }
    }
}



// Initialize inital parameter

let squarePerSide = 16;
const container = document.querySelector('#container');

container.style.width = "960px";
container.style.height = "960px";
container.style.border = "5px solid black";

createSquareDiv();

// Add event listener on hover to the div element

const divs = document.querySelectorAll('.squareBlock')
divs.forEach((div) =>{
    
    div.addEventListener('mouseover', (e) =>{
        e.target.style.background = "black";
    
    });
})



