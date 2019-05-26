const table = document.getElementById('table');

function sortTr(event) {
    const { rows } = table.tBodies[0];
    const { cellIndex } = event.target;
    const { type } = event.target.dataset;
    const body = table.tBodies[0];
    let newRowsTable = [];

    for (let row of rows) {
        newRowsTable = [...newRowsTable, row];
    }

    if (type === 'number') {
        newRowsTable.sort((rowFirst, rowSecond) => (+rowFirst.cells[cellIndex].textContent)
            - (+rowSecond.cells[cellIndex].textContent));
    } else if (type === 'string') {
        newRowsTable.sort((rowFirst, rowSecond) => rowFirst.cells[cellIndex].textContent
            .localeCompare(rowSecond.cells[cellIndex].textContent));
    }

    newRowsTable.forEach(row => body.appendChild(row));
}

table.tHead.addEventListener('click', sortTr);
