// Try to load the shopping cart from your browser's local storage.
// If there's saved data, it's converted from JSON into a JavaScript object/array.
export let cart = JSON.parse(localStorage.getItem('cart'));

// If no cart is found (for example, on the first visit), set up a default cart with two items.
if (!cart) {
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    }
  ];
}

// This function saves the current state of the cart back to local storage.
// It converts the cart array into a JSON string and stores it with the key "cart".
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// This function adds a product to your cart, identified by its productId.
export function addToCart(productId) {
  let matchingItem;

  // Look through every item in the cart to see if the product is already there.
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If the product is already in the cart, just increase its quantity by 1.
  // If it's not in the cart, add a new item with quantity 1.
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  // Save the updated cart back to local storage.
  saveToStorage();
}

// This function removes a product from your cart, identified by its productId.
export function removeFromCart(productId) {
  // Create a new cart array that only includes items that are NOT the one we want to remove.
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  // Replace the old cart with the new one that doesn't include the removed item.
  cart = newCart;

  // Save the updated cart back to local storage.
  saveToStorage();
}
