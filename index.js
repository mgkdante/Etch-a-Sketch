let btnCreateGrid = document.getElementById('createGrid');
let gridContainer = document.querySelector('.grid-container');
let btnClearGrid = document.getElementById('clearGrid');

const createGrid = (rows, cols) => {
    for(let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < cols; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);


            col.addEventListener('mouseover', () => {
                col.style.backgroundColor = 'black';
            })
        }
        gridContainer.appendChild(row);
    }
}

const createGridPixels = () => {
    let rows = prompt('Enter number of rows');
    let columns = prompt('Enter number of columns');
    gridContainer.textContent = '';
    if(rows === null || columns === null) {
        return;
    } else if(rows < 1 || columns < 1) {
        alert('Please enter a number greater than 0');
        return;
    } else if(rows > 100 || columns > 100) {
        alert('Please enter a number less than 100');
        return;
    }
    createGrid(rows, columns);
}


btnCreateGrid.addEventListener('click', () => {
    createGridPixels();
})


btnClearGrid.addEventListener('click', () => {
    gridContainer.textContent = '';
})

