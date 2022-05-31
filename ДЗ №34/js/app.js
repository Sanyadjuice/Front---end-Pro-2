'use strict';


(function () {

    const table = document.createElement('table');
    let row = document.createElement('tr');

    for (let i = 0; i < 100; i++) {
        if ((i + 1) % 10 === 0) {
            let td = document.createElement('td');
            td.innerHTML = String(i + 1);
            row.append(td);
            table.append(row);
            row = document.createElement('tr');
        } else {
            const td = document.createElement('td');
            td.innerHTML = String(i + 1);
            row.append(td);
        }
    }
    document.body.prepend(table);

})();

