import { updateCartCount, hamburgerFunction, getCart} from './somba-home-page.mjs'


// Get the curret year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;



const cart = document.querySelector('.cart');
const sombaCart = getCart();
sombaCart.map(item => {

    cart.innerHTML +=

    `
    <div class="show-cart">
        <img src="${item.image} alt="${item.image} image" loading="lazy">
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Unit Price: ${item.price}XAF</p>
        <p>Total Price: ${parseInt(item.price) * parseInt(item.quantity)}XAF</p>
    </div>
    
    `
    
}).join('');

updateCartCount();
hamburgerFunction();


