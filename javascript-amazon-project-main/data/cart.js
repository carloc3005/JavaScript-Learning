export const cart = [
    {
      productId: '43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    }
  ];
  
  // Example add-to-cart function snippet (ensure matchingItem is defined)
  // let matchingItem = cart.find(item => item.productId === productId);
  // if (matchingItem) {
  //   matchingItem.quantity += 1;
  // } else {
  //   cart.push({
  //     productId: productId,
  //     quantity: 1,
  //   });
  // }
  
  export function removeFromCart(productId) {
    const newCart = [];
  
    // Use a proper parameter in the forEach loop so that 'item' is defined.
    cart.forEach((item) => {
      if (productId !== item.productId) {
        newCart.push(item);
      }
    });
  
    // Clear the original cart array (mutating the const cart).
    cart.length = 0;
    newCart.forEach((item) => cart.push(item));
  }
  