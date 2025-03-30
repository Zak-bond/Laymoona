// script.js
const cart = [];
const products = [
  { id: 1, name: "Classic Lemonade", price: 3.0 },
  { id: 2, name: "Lemon Soap", price: 5.0 },
  { id: 3, name: "Lemon Scented Candle", price: 8.0 },
];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(
      event.target.closest(".product").getAttribute("data-id")
    );
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    updateCart();
  });
});

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>No items in cart.</li>";
  }

  total.textContent = `Total: $${totalPrice.toFixed(2)}`;
}