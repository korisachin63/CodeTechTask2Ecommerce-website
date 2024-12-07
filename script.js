// Example of updating the cart
let cartCount = 0;

document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.querySelector('.cart').textContent = `Cart (${cartCount})`;
    alert('Item added to cart!');
  });
});
