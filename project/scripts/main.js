// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger")
let backdropdiv = document.querySelector(".backdrop")
let navCon = document.querySelector(".mobile-nav-container ")


function toggleClassName() {
    hamburgerdiv.classList.toggle('crossburger')
    navCon.classList.toggle('show-mobile-navcontainer')
    backdropdiv.classList.toggle('showbackdrop')
}

hamburgerdiv.addEventListener("click", toggleClassName)
backdropdiv.addEventListener("click", toggleClassName)
// Animated hamburger menu ends here

// Window onscroll implementation starts here

window.addEventListener("scroll", () => {
    let nav = document.querySelector(".header-nav");
    let scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 1) {
        nav.classList.add("header-nav-sticky")
    }
    else {
        nav.classList.remove("header-nav-sticky")
    }
})

// Window onscroll implementation ends here

// Shop implementation starts here

const products = [
  {
    id: "1",
    age: "new",
    discount: 0,
    discountExpiresInDays: 23,
    rating: 5,
    title: "Banana la fruit",
    price: "₦4,000.00",
    miniImage: "./images/banana.jpg",
    mainImage: "./images/banana.jpg",
    category: "fruits",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."
  },
  {
    id: "2",
    age: "new",
    discount: 50,
    discountExpiresInDays: 23,
    rating: 5,
    title: "goldern moun la porche",
    price: "₦2,000.00",
    miniImage: "./images/goldern-moun-la-porche.jpg",
    mainImage: "./images/goldern-moun-la-porche.jpg",
    category: "wholegrain",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."
  }
  ,{
    id: "3",
    age: "new",
    discount: 50,
    discountExpiresInDays: 23,
    rating: 5,
    title: "pounded yam & vegetable",
    price: "₦4,000.00",
    miniImage: "./images/pounded-yam.jpg",
    mainImage: "./images/pounded-yam.jpg",
    category: "solids",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."
  }
  ,{
    id: "4",
    age: "new",
    discount: 50,
    discountExpiresInDays: 23,
    rating: 5,
    title: "Jellof rice and beef",
    price: "₦4,000.00",
    miniImage: "./images/jellof-rice.jpg",
    mainImage: "./images/jellof-rice.jpg",
    category: "solids",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."
  }
  ,{
    id: "5",
    age: "new",
    discount: 50,
    discountExpiresInDays: 23,
    rating: 5,
    title: "Oatmeal la cole",
    price: "₦4,000.00",
    miniImage: "./images/oatmeal.jpg",
    mainImage: "./images/oatmeal.jpg",
    category: "vegetarian",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque."
  }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  displayProducts(products);
  updateCartCount();
  renderCartItems();
});

function displayProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.miniImage}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart('${product.id}')">Add to Cart</button>
      <button onclick="viewProduct('${product.id}')">View</button>
    `;
    productList.appendChild(productCard);
  });
}

function filterProducts(category) {
  if (category === 'all') {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
}

function addToCart(id) {
  const product = products.find(product => product.id === id);
  const cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartCount();
  renderCartItems();
  saveCart();
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.classList.toggle('open');
}

function renderCartItems() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = 'No items in cart';
  cart.forEach(product => {
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${product.miniImage}" alt="${product.title}">
      <div>
        <h4>${product.title}</h4>
        <p>${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <button onclick="updateQuantity('${product.id}', 'decrease')">-</button>
        <button onclick="updateQuantity('${product.id}', 'increase')">+</button>
        <button onclick="removeFromCart('${product.id}')">Remove</button>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });
}

function updateQuantity(id, action) {
  const cartItem = cart.find(item => item.id === id);
  if (action === 'increase') {
    cartItem.quantity += 1;
  } else if (action === 'decrease' && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
  }
  updateCartCount();
  renderCartItems();
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartCount();
  renderCartItems();
  saveCart();
}

function viewProduct(id) {
  const product = products.find(product => product.id === id);
  const productList = document.getElementById('product-list');
  productList.innerHTML = `
    <div>
      <img src="${product.mainImage}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.price}</p>
      <p>${product.desc}</p>
      <button onclick="addToCart('${product.id}')">Add to Cart</button>
      <button onclick="displayProducts(products)">Back to Products</button>
    </div>
  `;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


// Shop implementation ends here