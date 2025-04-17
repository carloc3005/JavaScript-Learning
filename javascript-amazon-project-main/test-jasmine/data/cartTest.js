import { addToCart, cart, loadFromStorage } from '../../data/cart.js';

describe('Test Suite: addToCart', () => {
  beforeEach(() => {
    // reset the in‑memory cart and stub localStorage
    cart.length = 0;
    spyOn(localStorage, 'setItem');
  });

  it('adds to quantity when the product already exists', () => {
    spyOn(localStorage, 'getItem').and.callFake(() =>
      JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }])
    );

    loadFromStorage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('pushes a new item if it wasn’t already in the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify([]));

    loadFromStorage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
