export const cart = [{
    productId: '43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
},
{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

if(matchingItem) {
    matchingItem.quantity += 1;
} else {
    cart.push({
        productId: productId,
        quantity: 1,
    });
}

function removeFromCart(productId) {
    const newCart = [];
    
    cart.forEach(() => {
        if ( productId !== item.productId) {
            newCart.push(item);
        }
    });
}