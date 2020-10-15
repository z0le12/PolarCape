import { getAllCards } from './table.js';
import { getAllTypes } from './types.js';
import { loadingInformation } from './toggle-information.js';
import { colours } from './colours.js';
import { searchFieldLogic } from './search.js';

const welcomeName = document.getElementsByClassName('welcome-name')[0];
const name = sessionStorage.getItem('name');
welcomeName.innerText = name;

const showAllCards = document.querySelector('.show-all-cards');

window.onload = () => {
    getAllTypes();
    colours();
    searchFieldLogic();
};

showAllCards.addEventListener('click', () => {
    loadingInformation();
    getAllCards();
});