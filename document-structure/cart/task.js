const productsContainer = document.querySelector('.products');
const cartProductsContainer = document.querySelector('.cart__products');
const cartTitle = document.querySelector('.cart__title');

function updateCartVisibility() {
  if (cartProductsContainer.children.length > 0) {
    cartTitle.style.display = 'block';
  } else {
    cartTitle.style.display = 'none';
  }
}

function saveCart() {
  const cartItems = [];
  document.querySelectorAll('.cart__product').forEach(item => {
    cartItems.push({
      id: item.dataset.id,
      count: item.querySelector('.cart__product-count').textContent,
      img: item.querySelector('.cart__product-image').src
    });
  });
  localStorage.setItem('cart', JSON.stringify(cartItems));
  updateCartVisibility();
}

function loadCart() {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  if (savedCart) {
    savedCart.forEach(item => {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = item.id;
      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${item.img}">
        <div class="cart__product-count">${item.count}</div>
      `;
      cartProductsContainer.appendChild(cartProduct);
    });
  }
  updateCartVisibility();
}

productsContainer.addEventListener('click', (event) => {
  const target = event.target;
  const product = target.closest('.product');
  if (!product) return;

  const valueElement = product.querySelector('.product__quantity-value');
  let currentValue = parseInt(valueElement.textContent);

  if (target.classList.contains('product__quantity-control_dec')) {
    if (currentValue > 1) {
      valueElement.textContent = currentValue - 1;
    }
  } else if (target.classList.contains('product__quantity-control_inc')) {
    valueElement.textContent = currentValue + 1;
  } else if (target.classList.contains('product__add')) {
    const id = product.dataset.id;
    const img = product.querySelector('.product__image').src;
    const count = parseInt(valueElement.textContent);

    const existingProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${id}"]`);

    if (existingProduct) {
      const existingCount = parseInt(existingProduct.querySelector('.cart__product-count').textContent);
      existingProduct.querySelector('.cart__product-count').textContent = existingCount + count;
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = id;
      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${count}</div>
      `;
      cartProductsContainer.appendChild(cartProduct);
    }
    saveCart();
  }
});

cartProductsContainer.addEventListener('click', (event) => {
  const cartItem = event.target.closest('.cart__product');
  if (cartItem) {
    cartItem.remove();
    saveCart();
  }
});

loadCart();