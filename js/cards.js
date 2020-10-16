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
    let tableBody = document.getElementById('table-body');
    let loadingDiv = document.getElementsByClassName('loading-div')[0];

    if(loadingDiv) {
        alert(`Please wait for the current table to load.`);
    } else if(tableBody) {
        alert(`Please first close the table at the bottom, then load a new one.`);
    };

    loadingInformation();
    getAllCards();
    showHideFilterVisibility();
});