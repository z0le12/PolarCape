const searchButton = document.getElementById('search-btn')

export const searchFieldLogic = () => {
    const searchField = document.querySelector('.search-field');
    const searchInputValue = searchField.value;

    for (let i = 1, row; row = table.rows[i]; i++) {
        row.style.display = 'table-row';

        for (let j = 0, col; col = row.cells[j]; j++) {
            if(!(row.innerText.includes(searchInputValue))) {
                row.style.display = 'none';
            };
        };
    };

    if(searchInputValue === '') {
        row.style.display = 'table-row';
    };
};

searchButton.addEventListener('click', searchFieldLogic);