'use strict';


(function () {

    const table = document.createElement('table');
    let row = document.createElement('tr');

    for (let i = 0; i < 100; i++) {
        if ((i + 1) % 10 === 0) {
            let td = document.createElement('td');
            td.innerHTML = `${i + 1}`;
            table.append(row);
            row.append(td);
            row = document.createElement('tr');
        } else {
            const td = document.createElement('td');
            td.innerHTML = `${i + 1}`;
            row.append(td);

        }

    }
    document.body.prepend(table);
    table.style.margin = '0 auto'
})();

