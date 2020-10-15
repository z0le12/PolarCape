import { getAllCards } from './table.js';
import { getAllTypes } from './types.js';
import { loadingInformation, showHideFilterVisibility } from './toggle-information.js';
import { colours } from './colours.js';
import { searchFieldLogic } from './search.js';


document.getElementsByClassName('welcome-name')[0].innerText = sessionStorage.getItem('name');

window.onload = () => {
    getAllTypes();
    colours();
    searchFieldLogic();
};

document.querySelector('.show-all-cards').addEventListener('click', () => {
    loadingInformation();
    getAllCards();
    showHideFilterVisibility();
});