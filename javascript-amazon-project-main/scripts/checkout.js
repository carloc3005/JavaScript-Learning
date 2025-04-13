// Import functions and data:
// - 'cart' holds the items the user wants to buy.
// - 'removeFromCart' is used to delete an item from the cart.
// - 'products' is the full list of available products.
// - 'formatCurrency' converts prices from cents to a readable format.
import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

// Start with an empty string that will hold all the HTML for the order summary.
let cartSummaryHTML = '';

// For every item in the cart...
cart.forEach((cartItem) => {
  // Get the product ID of this cart item.
  const productId = cartItem.productId;

  // Find the product details that match this cart item.
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  // Build the HTML for this cart item:
  // - It shows a (currently hardcoded) delivery date.
  // - It shows the product image, name, price, and quantity.
  // - It has options for updating or deleting the item.
  // - It includes some delivery options as radio buttons.
  cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
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

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">Tuesday, June 21</div>
              <div class="delivery-option-price">FREE Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">Wednesday, June 15</div>
              <div class="delivery-option-price">$4.99 - Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">Monday, June 13</div>
              <div class="delivery-option-price">$9.99 - Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

// Put all the built HTML into the order summary area of the page.
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

// For every "Delete" link that was added above...
document.querySelectorAll('.js-delete-link').forEach((link) => {
  // When a user clicks "Delete"...
  link.addEventListener('click', () => {
    // Get the product ID from the link.
    const productId = link.dataset.productId;

    // Remove the item from the cart data.
    removeFromCart(productId);

    // Find the HTML container for this cart item and remove it from the page.
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
  });
});
