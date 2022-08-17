'use strict';

// const sizeOfGrid = 8;
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset-page');
const eraseButton = document.querySelector('.erase-grid')

let gridNumber = [0];

const createGrid = (gridAmount) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper') // This is here so that down below in our reset button we can grab and remove the wapper
    // For loop within for loop bc we need to go left to right and then top to bottom
    for (let i = 0; i < gridAmount; i++) { // i = o, is i < 16? if so, go into loop below 
        const row = document.createElement('div') // Since i < 16 we create a div
        row.classList.add('grid-row') // and then we give it a class name "grid-row"

        for (let j = 0; j < gridAmount; j++) { // j = o, is j < 16? if so, go into loop below 
            const widthAndHeight = 960 / gridAmount
            const gridBox = document.createElement('div') // Since i < 16 we create a div
            gridBox.classList.add('grid-box') // and then we give it a class name "grid-box"
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            row.appendChild(gridBox); // now we put "grid-box" into "grid-row" that is above. Append will put it NEXT to the element, but appendChild will put it INSIDE of the element. 
            // mouseenter for drawing
            gridBox.addEventListener('mousemove', () => { //mouseenter is an event that is fired when the mouse is initially moved so that it's hotspot is within the element at which the event was fired. 
                gridBox.style.backgroundColor = 'black'; // This is inside the loop and not after createGrid(sizeofGrid) otherwise the grid boxes arent drawn to the DOM yet.
            })
        }
        wrapper.appendChild(row); // now that the loops has completed we will add our row of 16 blocks
    }
    container.appendChild(wrapper);
};


resetButton.addEventListener('click', () => {
    gridNumber = Number(prompt('What grid size would you like?')); //Asking the first time for a grid size

    while (gridNumber > 100) {
        gridNumber = prompt('Please select grid size below 100'); //If user selected 100+ they're asked again
    }
    const wrapper = document.querySelector('.wrapper');
    if (!wrapper) { //If wrapper is not a thing then create the grid below
        createGrid(gridNumber);
    } else { // if wrapper IS a thing then remove the old wrapper (old grid) and create a new one.
        wrapper.remove()
        createGrid(gridNumber);
    }
});

eraseButton.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper');
    if (!wrapper) { //If wrapper is not a thing then create the grid below
        createGrid(gridNumber);
    } else { // if wrapper IS a thing then remove the old wrapper (old grid) and create a new one.
        wrapper.remove()
        createGrid(gridNumber);
    }
})

// createGrid(sizeOfGrid);