import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to a cart
export function addItemToCart(index) {
  console.log(index);
  // Just send index for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/equips/${index}`);
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(index, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'POST', { index, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

  // Retrieve all the orders that have been paid for
export function getAllOrders() {
  return sendRequest(`${BASE_URL}`);
}