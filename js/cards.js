import { CardsRepo } from './repository.js';

const welcomeName = document.getElementsByClassName('welcome-name')[0];
const name = sessionStorage.getItem('name');
welcomeName.innerText = name;

const showAllCards = document.querySelector('.show-all-cards');
const table = document.getElementById('table');
const cards = document.getElementById('cards');
const colours = document.querySelector('.colours');
const coloursList = document.getElementById('colours');
const coloursListItemsNodeList = document.querySelectorAll('.colours li');
const coloursListItems = Array.from(coloursListItemsNodeList);
const types = document.querySelector('.types');
const typesList = document.getElementById('types');

const cardsRepo = new CardsRepo;

const getAllTypes = async() => {
    const allTypes = await cardsRepo.getTypes();

    console.log(allTypes);


    allTypes.forEach((e, i) => {
        const listElement = document.createElement('li');
        listElement.innerText = e;
        typesList.appendChild(listElement);
    });
};

window.onload = () => {
    getAllTypes();
};

const getAllCards = async() => {
    const allCards = await cardsRepo.getCards();

    closeLoadingInformation();
    
    allCards.forEach((e, i) => {
        const tableRow = document.createElement('tr');

        const tableDataName = document.createElement('td');
        tableDataName.classList.add('api-table-data');

        const tableDataText = document.createElement('td');
        tableDataText.classList.add('api-table-data');

        const tableDataTypes = document.createElement('td');
        tableDataTypes.classList.add('api-table-data');

        const tableDataColors = document.createElement('td');
        tableDataColors.classList.add('api-table-data');

        tableDataName.innerText = allCards[i].name;
        tableDataText.innerText = allCards[i].text;
        tableDataTypes.innerText = allCards[i].types;
        tableDataColors.innerText = allCards[i].colors;

        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataText);
        tableRow.appendChild(tableDataTypes);
        tableRow.appendChild(tableDataColors);
        table.appendChild(tableRow);
    });

    closeTable();
};

const closeTable = () => {
    const closeTableDiv = document.createElement('div');
    closeTableDiv.classList.add('close-table-div');
    const closeTableBtn = document.createElement('button');
    closeTableBtn.classList.add('close-table-btn');
    closeTableBtn.innerText = 'Close Table';
    closeTableDiv.appendChild(closeTableBtn);
    cards.appendChild(closeTableDiv);
    
    closeTableBtn.addEventListener('click', () => {
        const tableRows = document.getElementsByClassName('api-table-data');
        const arrTableRows = Array.from(tableRows)

        table.style.display = 'none';
        arrTableRows.map(e => e.remove());
        closeTableDiv.remove();
    });
};

const toggleDropDownVisibility = (element) => {
    if(element.style.display === 'flex') {
        element.style.display = 'none'
    } else {
        element.style.display = 'flex'
    }
};

colours.addEventListener('click', () => {
    toggleDropDownVisibility(coloursList);
});

types.addEventListener('click', () => {
    toggleDropDownVisibility(typesList);
});

showAllCards.addEventListener('click', () => {
    loadingInformation();

    getAllCards();
    table.style.display = 'table-cell';
});

const loadingInformation = () => {
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading-div');

    const pTagInformation = document.createElement('p');
    pTagInformation.classList.add('loading-information');
    pTagInformation.innerText = "Fetching API data, please wait";
    loadingDiv.appendChild(pTagInformation);

    const loadingGif = document.createElement('img');
    loadingGif.src = '../images/loading-gif.gif';
    loadingDiv.appendChild(loadingGif);

    cards.appendChild(loadingDiv);
};

const closeLoadingInformation = () => {
    const loadingDiv = document.querySelector('.loading-div');
    loadingDiv.remove();
};

coloursListItems.forEach((e, i) => {
    e.onclick = async () => {
        const clickedItem = e.innerText;
        const allCards = await cardsRepo.getCards();
        const cardsColours = allCards[i].colors;
        console.log(cardsColours);
    };
});