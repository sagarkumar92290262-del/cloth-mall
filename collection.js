 let products = JSON.parse(localStorage.getItem("products") || "[]");

let container = document.getElementById("product-container");

let urlParams = new URLSearchParams(window.location.search);
let selectedCategory = urlParams.get("cat");

if(selectedCategory){
    products = products.filter(product =>
        product.category === selectedCategory
    );
}

if(container){

    products.forEach(product => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
        Add To Cart
        </button>
        `;

        container.appendChild(card);

    });

}