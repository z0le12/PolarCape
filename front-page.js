const inputForm = document.getElementById('input-form');
const inputField = document.querySelector('#input-form input');
const inputButton = document.querySelector('#input-form button');
const formSpan = document.querySelector('#input-form span');

const errors = () => {
    inputForm.style.border = '3px solid red';
    inputForm.style.flexDirection = 'column';
    formSpan.style.display = 'block';
    inputField.style.borderColor = 'red';
    inputButton.style.background = 'red';
};

const createErrorInformation = (innerText) => {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-div');
    inputForm.appendChild(errorDiv);

    const pTagError = document.createElement('p');
    pTagError.classList.add('p-tag-error');
    pTagError.innerText = innerText;
    errorDiv.appendChild(pTagError);

    return errorDiv;
};

const removeErrors = () => {
    inputForm.style.border = '1px solid #91d5fc';
    formSpan.style.display = 'none';
    inputField.style.borderColor = 'black';
    inputButton.style.background = 'chartreuse';
};

const removeErrorInformation = () => {
    const errorDiv = document.querySelector('.error-div');
    if(!errorDiv) {
        return
    };

    errorDiv.remove();
};

inputButton.addEventListener('click', () => {
    const firstCharacter = inputField.value.charAt(0);
    const errorDiv = document.getElementsByClassName('error-div');

    if(errorDiv.length === 1) {
        return;
    }else if (inputField.value.length <3) {
        errors();
        createErrorInformation('Sorry Jos, but your name should be consisted of at least 3 letters');
    } else if(firstCharacter !== firstCharacter.toUpperCase()) {
        errors();
        createErrorInformation('Your name should strat with a capital letter');
    } else {
        sessionStorage.setItem('Name', inputField.value);
    }
});

inputField.addEventListener('focus', () => {
    if(inputButton.style.background === 'chartreuse') {
        return
    } else {
        removeErrors();
        removeErrorInformation();
    }
});