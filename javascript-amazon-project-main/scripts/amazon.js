// Import data and helper functions:
// - Get the shopping cart and a function to add products to it.
// - Get the list of products.
// - Get a function to display prices nicely.
import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

// Start with an empty string to build our HTML content for products.
let productsHTML = '';

// Loop through each product in the products list.
products.forEach((product) => {
  // For each product, build a block of HTML that shows:
  // - The product image.
  // - The product name (with text limited to 2 lines).
  // - The product rating (image and count).
  // - The product price, nicely formatted.
  // - A dropdown to choose the quantity.
  // - A hidden "added to cart" message.
  // - An "Add to Cart" button with the product's ID stored in it.
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

// Find the part of your webpage with the class "js-products-grid"
// and set its content (innerHTML) to the products you just built.
document.querySelector('.js-products-grid').innerHTML = productsHTML;

// A function to update the total number of items in the cart.
function updateCartQuantity() {
  let cartQuantity = 0;

  // Go through each item in the cart and add up their quantities.
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  // Show the total number in the cart icon on the webpage.
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

// For each "Add to Cart" button on the page:
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  // When the button is clicked...
  button.addEventListener('click', () => {
    // Get the product's id from the button's data attribute.
    const productId = button.dataset.productId;
    // Add the product to the cart.
    addToCart(productId);
    // Update the number shown in the cart.
    updateCartQuantity();
  });
});
