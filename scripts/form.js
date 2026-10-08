// Get the curret year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate options dynamically 
const selectElement = document.querySelector('select');

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});

// Store reviews on local Storage

const countReviews = document.querySelector('#reviews');

let count = Number (localStorage.getItem('countReviews')) || 0;

// Increment count by 1

count++

// Save reviews

localStorage.setItem('countReviews', count);

// Display reviews

countReviews.textContent = count;

