// import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to a cart
export function addItemToCart(index) {
  // console.log(index);
  // Just send index for best security (no pricing)
  return sendRequest(BASE_URL, 'POST',  index );
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(index, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'POST', { index, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout(order) {
  // Changing data on the server, so make it a POST request
  return sendRequest(BASE_URL, 'POST', order);
}

//   // Retrieve all the orders that have been paid for
// export function getAllOrders() {
//   return sendRequest(`${BASE_URL}`);
// }

/*--- Helper Functions ---*/

export default async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  console.log(`URL: ${url} & METHOD: ${method} & PAYLOAD: ${payload}`);

  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  console.log(`URL: ${url} & METHOD: ${method} & PAYLOAD: ${payload}`);
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem('token');
    return null;
  }
  return token;
}