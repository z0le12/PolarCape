const showAllCards = document.querySelector('.show-all-cards');
const table = document.getElementById('table');

export class CardsRepo {
    constructor() {

        this.getCards = async () => {
            try {
                const response = await fetch('https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English');
                const results = await response.json();
                console.log(results.cards);
                return results.cards;
            } catch (err) {
                return console.error(err);
            }
        };

        this.getTypes = async () => {
            try {
                const response = await fetch('https://api.magicthegathering.io/v1/types');
                const results = await response.json();
                console.log(results.types);
                return results;
            } catch (err) {
                return console.error(err);
            }
        };

    };
};

const cardsRepo = new CardsRepo;

const getAllCards = async() => {
    const allCards = await cardsRepo.getCards();


    allCards.forEach((e, i) => {
        const tableRow = document.createElement('tr');
        const tableDataName = document.createElement('td');
        const tableDataText = document.createElement('td');
        const tableDataTypes = document.createElement('td');
        const tableDataColors = document.createElement('td');
        tableDataName.innerText = allCards[i].name;
        tableDataText.innerText = allCards[i].text;
        tableDataTypes.innerText = allCards[i].types;
        tableDataColors.innerText = allCards[i].colors;
        tableRow.appendChild(tableDataName, tableDataText, tableDataTypes, tableDataColors);
        tableRow.appendChild(tableDataText);
        tableRow.appendChild(tableDataTypes);
        tableRow.appendChild(tableDataColors);
        table.appendChild(tableRow);
    });
};

showAllCards.addEventListener('click', () => {
    getAllCards();
    table.style.display = 'table-cell';
});
