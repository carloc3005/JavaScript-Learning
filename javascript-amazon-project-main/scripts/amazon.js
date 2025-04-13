import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let productsHTML = ``;

products.forEach((product) => {
  const ratingImageValue = Math.round(product.rating.stars * 10 / 5) * 5;
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${ratingImageValue}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <!-- Added a unique class for each product's quantity selector -->
            <select class="js-quantity-selector js-quantity-selector-${product.id}">
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

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="js-add-to-cart-button add-to-cart-button button-primary" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const { productId } = button.dataset;
    addToCart(productId);
    updateCartQuantity();


    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

    // If there's an existing timer, clear it before starting a new one
    if (addedMessage.timeoutId) {
      clearTimeout(addedMessage.timeoutId);
    }

    addedMessage.classList.add('added-to-cart-visible');

    // Save the timer identifier on the element so that it can be cleared if needed
    addedMessage.timeoutId = setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
      delete addedMessage.timeoutId;
    }, 2000);
  });
});
