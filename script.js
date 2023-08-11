const products = [
    { id: 1, name: "Product 1", price: 20.99, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 15.49, image: "product2.jpg" },
    // Add more products here...
];

const productContainer = document.querySelector(".product-list");

// Function to display products
function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Call the function to display products
displayProducts();
