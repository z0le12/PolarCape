import { CardsRepo } from './repository.js';
import { toggleDropDownVisibility } from './toggle-information.js';

const types = document.querySelector('.types');
const typesList = document.getElementById('types');

const cardsRepo = new CardsRepo;

export const getAllTypes = async() => {
    const allTypes = await cardsRepo.getTypes();

    allTypes.forEach((e, i) => {
        const listElement = document.createElement('li');
        listElement.innerText = e;
        typesList.appendChild(listElement);
    });

    const typesListItemsNodeList = document.querySelectorAll('#types li');
    const typesListItems = Array.from(typesListItemsNodeList);

    typesListItems.forEach((e, i) => {
        e.onclick = () => {
            const clickedItem = e.innerText;
            // colours.innerText = clickedItem;
    
            for (let i = 1, row; row = table.rows[i]; i++) {
                row.style.display = 'table-row';
    
                for (let j = 0, col; col = row.cells[j]; j++) {
                    let attributes = col.attributes['label'].value;
                    if(attributes === 'type' && !(col.innerText.includes(clickedItem))) {
                        row.style.display = 'none';
                    };
                };
    
            };
        };
    });
};

types.addEventListener('click', () => {
    toggleDropDownVisibility(typesList);
});