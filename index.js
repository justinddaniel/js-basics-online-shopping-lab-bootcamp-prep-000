var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemName = item
  let itemPrice = Math.floor(Math.random() * 100) + 1
  var itemConstructor = {[itemName]: itemPrice}
  cart.push(itemConstructor)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  const yourCart = ['In your cart, you have']
  for (var i = 0; i < cart.length; i++) {
    new object1 = cart[i]
    var keys = Object.keys(object1)
    var values = object1[keys[i]]}
    for (var i = 0; i < cart.length; i++) {
      yourCart.push(` ${keys[i]} at ${values[i]},`)
    } for (var i = cart.length; i = cart.length; i++) {
      yourCart.push(` and ${keys[i]} at ${values[i]}.`)
    } return youCart



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
