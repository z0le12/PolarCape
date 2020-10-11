const welcomeName = document.getElementsByClassName('welcome-name')[0];
const name = sessionStorage.getItem('name');
welcomeName.innerText = name;