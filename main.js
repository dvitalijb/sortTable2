const table = document.getElementById('table');

function sortTr(event) {
    const { rows } = table.tBodies[0];
    const { cellIndex } = event.target;
    const { type } = event.target.dataset;
    const body = table.tBodies[0];
    const newRowsTable = [...rows];

    const contentTd = elem => elem.cells[cellIndex].textContent;

    switch(type) {
        case 'number' :
            newRowsTable.sort((rowFirst, rowSecond) => +contentTd(rowFirst)
                - (+contentTd(rowSecond)));
            break;
        case 'string' :
            newRowsTable.sort((rowFirst, rowSecond) => contentTd(rowFirst)
                .localeCompare(contentTd(rowSecond)));
    }

    newRowsTable.forEach(row => body.appendChild(row));
}

table.tHead.addEventListener('click', sortTr);
