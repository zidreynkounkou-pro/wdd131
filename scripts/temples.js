const navigation = document.querySelector('#navigation');
const hamburger = document.querySelector('#menu');


hamburger.addEventListener('click', () => {
    if (navigation.style.display === 'none') {
        hamburger.classList.toggle('open');
        navigation.style.display = 'flex';
    }

    else {
        hamburger.classList.remove('open');
        navigation.style.display = 'none';
    }
});



// Get the current year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;