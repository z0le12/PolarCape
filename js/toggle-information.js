export const toggleDropDownVisibility = (element) => {
    if(element.style.display === 'flex') {
        element.style.display = 'none'
    } else {
        element.style.display = 'flex'
    }
};

export const loadingInformation = () => {
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

export const closeLoadingInformation = () => {
    const loadingDiv = document.querySelector('.loading-div');
    loadingDiv.remove();
};

export const showHideFilterVisibility = () => {
    const filterElementsHTMLCollection = document.getElementsByClassName('filter');
    const filterElements = Array.from(filterElementsHTMLCollection);
    
    filterElements.forEach((e, i) => {
        if(e.style.visibility === '') {
            e.style.visibility = 'visible';
            return;
        } else {
            e.style.visibility = 'hidden';
        }
    });
};