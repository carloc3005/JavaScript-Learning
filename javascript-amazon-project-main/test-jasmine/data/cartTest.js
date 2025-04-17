import {addToCart, cart} from '../../data/cart.js';

describe('Test Suite: addToCart', () => {
	it('adds an existing product to the cart', () => {

	});

	it('adds a new product to the cart', () => {
		addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
		expect('cart.length').toEqual(1);
	});
});