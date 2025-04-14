// Import functions and data:
// - 'cart' holds the items the user wants to buy.
// - 'removeFromCart' is used to delete an item from the cart.
// - 'products' is the full list of available products.
// - 'formatCurrency' converts prices from cents to a readable format.
import { cart, removeFromCart, updateDeliveryOption } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from '../data/deliveryOptions.js';

// Calculate and log a sample delivery date.
const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));

// Initialize an empty string to build the order summary HTML.
let cartSummaryHTML = '';

// For every item in the cart, build the HTML including delivery options.
cart.forEach((cartItem) => {
  // Get the product ID for the current cart item.
  const productId = cartItem.productId;

  // Find matching product details for the cart item.
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  const deliveryOptionId = cartItem.deliveryOptionId;

  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId)
    {
      deliveryOption = option;
    }
  })

  // If desired, pass the product ID to another function.
  processProduct(matchingProduct.id);

  // Build the HTML for this cart item.
  cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id} js-delivery=option">
      <div class="delivery-date">
        Delivery date: ${dayjs().add(deliveryOption.deliveryDays, 'days').format('dddd, MMMM D')}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image" src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">Update</span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        ${deliveryOptionsHTML(matchingProduct.id, cartItem)}
      </div>
    </div>
  `;
});

// This function generates the HTML for the delivery options given a product ID.
function deliveryOptionsHTML(productId, cartItem) {
  let html = `
    <div class="delivery-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
  `;
  
  deliveryOptions.forEach((deliveryOption) => {
    // Calculate the delivery date based on deliveryDays.
    const deliveryDate = dayjs().add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    const priceString = deliveryOption.priceCents === 0 
      ? 'FREE Shipping' 
      : `$${formatCurrency(deliveryOption.priceCents)}`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
    html += `
      <div class="delivery-option">
        <input type="radio" ${isChecked ? 'check' : '' } class="delivery-option-input" name="delivery-option-${productId}">
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString}</div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  return html;
}

// This is an example of another function accessing the product ID.
// It receives the same parameter passed to deliveryOptionsHTML.
function processProduct(productId) {
  console.log("Processing product with ID:", productId);
  // Additional processing logic could be implemented here.
}

// Insert the built HTML into the order summary area.
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

// For every "Delete" link added above, attach an event listener.
document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    // Retrieve the product ID from the data attribute.
    const productId = link.dataset.productId;

    // Remove the item from the cart data.
    removeFromCart(productId);

    // Find and remove the corresponding HTML element.
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    if (container) {
      container.remove();
    }
  });
});

document.querySelectorAll('.js-delivery-option').forEach((element) => {
  element.addEventListener('click', () => {
    updateDeliveryOption(productId, );
  });
});