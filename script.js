document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
    const animationShown = localStorage.getItem("animationShown");
      
      setTimeout(() => {
        preloader.style.display = "none"; 
        mainContent.style.display = "block"; 
        document.body.style.overflow = "auto"; 
      }, 3500); 
    

  

  //mario kart
  const cart = [];
  const products = [
    { id: 1, name: "Classic Lemonade", price: 3.0 },
    { id: 2, name: "Lemon Soap", price: 5.0 },
    { id: 3, name: "Lemon Scented Candle", price: 8.0 },
  ];
 /* 
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productElement = event.target.closest(".product");
      if (!productElement) return; // Ensure the product element exists
  
      const productId = parseInt(productElement.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
  
      if (product) {
        cart.push(product);
        updateCart();
      } else {
        console.error("Product not found for ID:", productId);
      }
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
*/
} 
})


