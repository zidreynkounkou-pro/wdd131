// Get the curret year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;




// Load from localStorage first
function getCart() {
  return JSON.parse(localStorage.getItem('somba-cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('somba-cart', JSON.stringify(cart));
}

// Update count from storage
export function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartIcon = document.getElementById('count');
  console.log("Cart count:", count); 
  if (cartIcon) {
    cartIcon.textContent = count;
  }
}

// Add to cart
function setupAddToCart() {
  const buttons = document.querySelectorAll('#add-to-cart');
  
  buttons.forEach(btn => {
      btn.addEventListener('click', () => {
    // get latest cart
      let cart = getCart();

      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      const image = btn.dataset.image;

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, image, quantity: 1});
      }

      saveCart(cart);
      updateCartCount();

      btn.textContent = "Added to Cart";
      setTimeout(() => btn.textContent = "Add to Cart", 1000);
    });
  });
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
  setupAddToCart();
  updateCartCount();
});

// Run in case DOMContentLoaded already fired
updateCartCount();






// Hamburger button

export function hamburgerFunction() {
  const navigation = document.querySelector('.nav-bar');
  const hamburger = document.querySelector('#menu');

  // Do not add another listener if we already have one on main page
  if (hamburger.dataset.listener === "true") return;
  hamburger.dataset.listener = "true";
  
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
  
}

hamburgerFunction();




/*

let cart = JSON.parse(localStorage.getItem('soma-cart')) || [];

//Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const shoppingCart = document.querySelector('#count');
    if (shoppingCart) {
        shoppingCart.textContent = count;
    }
}


// Add to cart

function addToCart () {
    const buttons = document.querySelectorAll('#add-to-cart');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.dataset.name;
            const price = parseInt(btn.dataset.price);
            const image = btn.dataset.image;

            // Check if already in cart

            const exist = cart.find(item => item.name === name);

            if (exist) {
                exist.quantity += 1;
            }

            else {
                cart.push({name, price, image, quantity:1})
            }

            localStorage.setItem('somba-cart', JSON.stringify(cart));
            updateCartCount();
        })
        
    })
}


addToCart();


*/