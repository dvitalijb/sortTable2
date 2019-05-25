const table = document.getElementById('table');

const sortNumber = (a ,b) => a - b;

const sortString = (a ,b) => a.localeCompare(b);

function SortTr(event) {
    const { rows } = table.tBodies[0];
    const { cellIndex } = event.target;
    const { dataset } = event.target;
    // console.log(dataset)
    // const sortCells =
    let newRowsTable = [];
    for (let row of rows) {
        newRowsTable = [...newRowsTable,row];
    }

    if (dataset === 'number') {
        newRowsTable.sort((a, b) => a.cells[cellIndex].innerText - b.cells[cellIndex].innerText);
    } else if (dataset === 'string') {
        newRowsTable.sort((a, b) => a.cells[cellIndex].innerText.localeCompare(b.cells[cellIndex].innerText));
    }
    newRowsTable.forEach(a => table.tBodies[0].appendChild(a ));

     //    newRowsTable.sort((a, b)=>{return a.cells[cellIndex].textContent - b.cells[cellIndex].textContent})
     // newRowsTable.forEach(a => console.log(a.cells[cellIndex].textContent));
     //    console.log(newRowsTable)
}

table.tHead.addEventListener('click', SortTr)




// const table = document.getElementById('table');
//
// function sortRows(event) {
//     const rows = table.rows;
//     const dataAttribute = event.target.getAttribute('data-type');
//     const newRowsTable = [];
//     for (let i = 1; i < rows.length; i++) {
//         newRowsTable.push(rows[i]);
//     }
//
//     if (dataAttribute === 'number') {
//         newRowsTable.sort((a, b) => a.cells[0].innerText - b.cells[0].innerText);
//     } else if (dataAttribute === 'string') {
//         newRowsTable.sort((a, b) => a.cells[1].innerText.localeCompare(b.cells[1].innerText));
//     }
//     newRowsTable.forEach(a => table.tBodies[0].appendChild(a));
// }
//
// table.addEventListener('click', sortRows);