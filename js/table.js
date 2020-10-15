import { CardsRepo } from './repository.js';
import { closeLoadingInformation } from './toggle-information.js';
import { showHideFilterVisibility } from './toggle-information.js';

const cards = document.getElementById('cards');
const table = document.getElementById('table');
const tableBody = document.getElementById('table-body');

const cardsRepo = new CardsRepo;

export const getAllCards = async() => {
    const allCards = await cardsRepo.getCards();

    closeLoadingInformation();

    if(!tableBody) {
        tableBody = document.createElement('tbody');
    };
    
    allCards.forEach((e, i) => {
        const tableRow = document.createElement('tr');

        const tableDataName = document.createElement('td');
        tableDataName.classList.add('api-table-data');
        tableDataName.setAttribute('label', 'name');

        const tableDataText = document.createElement('td');
        tableDataText.classList.add('api-table-data');
        tableDataText.setAttribute('label', 'text');

        const tableDataTypes = document.createElement('td');
        tableDataTypes.classList.add('api-table-data');
        tableDataTypes.setAttribute('label', 'type');
        
        const tableDataColors = document.createElement('td');
        tableDataColors.classList.add('api-table-data');
        tableDataColors.setAttribute('label', 'colour');

        tableDataName.innerText = allCards[i].name;
        tableDataText.innerText = allCards[i].text;
        tableDataTypes.innerText = allCards[i].types;
        tableDataColors.innerText = allCards[i].colors;

        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataText);
        tableRow.appendChild(tableDataTypes);
        tableRow.appendChild(tableDataColors);

        tableBody.appendChild(tableRow);
        table.appendChild(tableBody);
    });

    closeTableBTN();

    table.style.display = 'table';
};

const closeTableBTN = () => {
    const closeTableDiv = document.createElement('div');
    closeTableDiv.classList.add('close-table-div');
    const closeTableBtn = document.createElement('button');
    closeTableBtn.classList.add('close-table-btn');
    closeTableBtn.innerText = 'Close Table';
    closeTableDiv.appendChild(closeTableBtn);
    cards.appendChild(closeTableDiv);
    
    closeTableBtn.addEventListener('click', () => {
        table.style.display = 'none';
        tableBody.remove();
        closeTableDiv.remove();
        showHideFilterVisibility();
    });
};

const sortTable = () => {
    let i, rows, sortFlag;

    let switchCount = 0;
    let sorted = true;
    let dir = 'asc';

    while(sorted) {
        sorted = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            sortFlag = false;
            let x = rows[i].getElementsByTagName("TD")[0];
            let y = rows[i + 1].getElementsByTagName("TD")[0];
            if (dir === 'asc') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    sortFlag = true;
                    break;
                }
            } else {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    sortFlag = true;
                    break;
                }
            }
        };

        if(sortFlag) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sorted = true;
            switchCount = 1;
        } else {
            if (switchCount == 0 && dir == "asc") {
                dir = "desc";
                sorted = true;
            }
        }

    };
};

const nameRow = document.getElementById('sort').addEventListener('click',() => {
    sortTable();
});