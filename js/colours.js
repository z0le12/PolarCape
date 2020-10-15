import { toggleDropDownVisibility } from './toggle-information.js';

const coloursDiv = document.querySelector('.colours');
const coloursList = document.getElementById('colours');
const coloursListItemsNodeList = document.querySelectorAll('.colours li');
const coloursListItems = Array.from(coloursListItemsNodeList);

export const colours = () => {
    coloursListItems.forEach((e, i) => {
        e.onclick = () => {
            const clickedItem = e.innerText;
            // colours.innerText = clickedItem;

            for (let i = 1, row; row = table.rows[i]; i++) {
                row.style.display = 'table-row';

                for (let j = 0, col; col = row.cells[j]; j++) {
                    let attributes = col.attributes['label'].value;
                    if(attributes === 'colour' && !(col.innerText.includes(clickedItem))) {
                        row.style.display = 'none';
                    };
                };

            };
        };
    });
};

coloursDiv.addEventListener('click', () => {
    toggleDropDownVisibility(coloursList);
});