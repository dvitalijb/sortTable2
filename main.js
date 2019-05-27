const table = document.getElementById('table');

function sortTr(event) {
    const { rows } = table.tBodies[0];
    const { cellIndex } = event.target;
    const { type } = event.target.dataset;
    const body = table.tBodies[0];
    const newRowsTable = [...rows];

    switch (type) {
        case 'number' :
            newRowsTable.sort((rowFirst, rowSecond) => (+rowFirst.cells[cellIndex].textContent)
                - (+rowSecond.cells[cellIndex].textContent));
            break;
        case 'string' :
            newRowsTable.sort((rowFirst, rowSecond) => rowFirst.cells[cellIndex].textContent
                .localeCompare(rowSecond.cells[cellIndex].textContent));
    }

    newRowsTable.forEach(row => body.appendChild(row));
}

table.tHead.addEventListener('click', sortTr);
