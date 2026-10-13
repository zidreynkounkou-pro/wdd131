// Get the curret year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;


const navigation = document.querySelector('.nav-bar');
const hamburger = document.querySelector('#menu');


// Hamburger button
hamburger.addEventListener('click', () => {
    if (navigation.style.display === 'none') {
        hamburger.classList.toggle('open');
        navigation.style.display = 'grid';
    }

    else {
        hamburger.classList.remove('open');
        navigation.style.display = 'none';
    }
});


let cart = JSON.parse(localStorage.getItem('soma-cart')) || [];

//Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const shoppingCart = document.querySelector('.shopping-cart');
    if (shoppingCart) {
        shoppingCart.textContent = count;
    }
}


// Add to cart

function addToCart () {
    const button = document.querySelectorAll('#add-to-cart');
}