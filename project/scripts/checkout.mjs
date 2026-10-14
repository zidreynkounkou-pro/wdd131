import { updateCartCount, hamburgerFunction } from "./somba-home-page.mjs";

// Get the curret year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;

hamburgerFunction();
updateCartCount();


// Handle orders

function getCart() {
  return JSON.parse(localStorage.getItem('somba-cart')) || [];
}

function calculateTotals() {
  const cart = getCart();
  const numItems = cart.reduce((t, i) => t + i.quantity, 0);
  const subtotal = cart.reduce((t, i) => t + i.price * i.quantity, 0);
  
const taxRate = 0.18;
  const tax = subtotal * taxRate;
  const shipping = subtotal > 0 ? 5000 : 0;
  const total = subtotal + tax + shipping;

  return { numItems, subtotal, tax, shipping, total };
}

function renderOrderSummary() {
  const { numItems, subtotal, tax, shipping, total } = calculateTotals();

  const numItemsEl = document.getElementById('num-items');
  const cartTotalEl = document.getElementById('cartTotal');
  const taxEl = document.getElementById('tax');
  const shippingEl = document.getElementById('shipping');
  const orderTotalEl = document.getElementById('orderTotal');

  if (numItemsEl) numItemsEl.textContent = numItems;
  if (cartTotalEl) cartTotalEl.textContent = `${subtotal.toLocaleString()} XAF`;
  if (taxEl) taxEl.textContent = `${tax.toLocaleString()} XAF`;
  if (shippingEl) shippingEl.textContent = `${shipping.toLocaleString()} XAF`;
  if (orderTotalEl) orderTotalEl.textContent = `${total.toLocaleString()} XAF`;
}

function handleCheckout() {
  const form = document.getElementById('checkoutSubmit');
  const orderDateInput = document.getElementById('orderDate');
  
  if (orderDateInput) {
    orderDateInput.value = new Date().toISOString();
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cart = getCart();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      window.location.href = "index.html";
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const order = {
      customer: {
        fname: formData.get('fname'),
        lname: formData.get('lname'),
      },
      address: {
        street: formData.get('street'),
        city: formData.get('city'),
        state: formData.get('state'),
        zip: formData.get('zip'),
      },
      payment: {
        cardNumber: formData.get('cardNumber').slice(-4),
        expiration: formData.get('expiration'),
      },
      cart: cart,
      totals: calculateTotals(),
      orderDate: new Date().toLocaleString(),
    };

    /*
    const orders = JSON.parse(localStorage.getItem('somba-orders')) || [];
    orders.push(order);
    localStorage.setItem('somba-orders', JSON.stringify(orders));
    */

    // Clear cart
    localStorage.removeItem('somba-cart');

    alert(`Thank you ${order.customer.fname}! Your order of ${order.totals.total.toLocaleString()} XAF has been placed.`);
    window.location.href = "index.html";
  });
}



document.addEventListener('DOMContentLoaded', () => {
  renderOrderSummary();
  handleCheckout();
});