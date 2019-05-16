const table = document.getElementById('table');

function sortRows(event) {
    const rows = table.rows;
    const dataAttribute = event.target.getAttribute('data-type');
    const newRowsTable = [];
    for (let i = 1; i < rows.length; i++) {
        newRowsTable.push(rows[i]);
    }

    if (dataAttribute === 'number') {
        newRowsTable.sort((a, b) => a.cells[0].innerText - b.cells[0].innerText);
    } else if (dataAttribute === 'string') {
        newRowsTable.sort((a, b) => a.cells[1].innerText.localeCompare(b.cells[1].innerText));
    }
    newRowsTable.forEach(a => table.tBodies[0].appendChild(a));
}

table.addEventListener('click', sortRows);