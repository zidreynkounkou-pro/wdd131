// Get the curret year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;


// Store reviews on local Storage

const countReviews = document.querySelector('#reviews');

let count = Number (localStorage.getItem('yourViews')) || 0;

// Increment count by 1

count++

// Save reviews

localStorage.setItem('yourViews', count);

// Display reviews

countReviews.textContent = count;

