'use strict';

const sizeOfGrid = 16;
const container = document.querySelector('.container');

const createGrid = (gridAmount) => {
    // For loop within for loop bc we need to go left to right and then top to bottom
    for (let i = 0; i < gridAmount; i++) { // i = o, is i < 16? if so, go into loop below 
        const row = document.createElement('div') // Since i < 16 we create a div
        row.classList.add('grid-row') // and then we give it a class name "grid-row"

        for (let j = 0; j < gridAmount; j++) { // j = o, is j < 16? if so, go into loop below 
            const widthAndHeight = 960 / sizeOfGrid
            const gridBox = document.createElement('div') // Since i < 16 we create a div
            gridBox.classList.add('grid-box') // and then we give it a class name "grid-box"
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            row.appendChild(gridBox); // now we put "grid-box" into "grid-row" that is above. Append will put it NEXT to the element, but appendChild will put it INSIDE of the element. 
        }
        container.appendChild(row); // now that the loops has completed we will add our row of 16 blocks
    }
};

createGrid(sizeOfGrid);