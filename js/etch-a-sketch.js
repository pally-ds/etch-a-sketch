// Create a function which takes the number of square grid.
// Create the div box within the container similar to the number of square grid

function createSquareDiv() {
    const div = document.createElement('div');

    for (let i=0; i<squarePerSide; i++ ) {
        console.log(i);       
        for (let j=0; j<squarePerSide; j++ ) {
            const div = document.createElement('div');
            div.style.width = "58px";
            div.style.height = "58px";
            div.style.border = "1px solid black";

            container.appendChild(div);
        }
    }
}

//Initialize inital parameter

let squarePerSide = 16;
const container = document.querySelector('#container');

container.style.width = "960px";
container.style.height = "960px";
container.style.border = "1px solid black";



createSquareDiv();

// define the container width and height to be 960px
