import sendRequest from "../utilities/send-request";
const BASE_URL = "/api/orders";

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to a cart
export function addItemToCart(index) {
  // console.log(index);
  // Just send index for best security (no pricing)
  return sendRequest(BASE_URL, "POST", index);
}

// Updates the order's (cart's) isPaid property to true
export function checkout(order) {
  console.log(order);
  // Changing data on the server, so make it a POST request
  return sendRequest(BASE_URL, "POST", order);
}
