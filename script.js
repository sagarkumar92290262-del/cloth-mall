 let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* CART FUNCTIONS */

function addToCart(name, price, image){

let item = cart.find(p => p.name === name);

if(item){
item.qty++;
}else{
cart.push({
name: name,
price: price,
image: image,
qty: 1
});
}

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name + " added to Cart 🛒");
}

function updateCartCount(){

let currentCart = JSON.parse(localStorage.getItem("cart")) || [];

let count = 0;

currentCart.forEach(item => {
count += item.qty;
});

let cartCounter = document.getElementById("cart-count");

if(cartCounter){
cartCounter.innerText = count;
}
}

function addOne(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart[index].qty++;

localStorage.setItem("cart", JSON.stringify(cart));

location.reload();
}

function removeItem(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart[index].qty > 1){
cart[index].qty--;
}else{
cart.splice(index,1);
}

localStorage.setItem("cart", JSON.stringify(cart));

location.reload();
}

/* SEARCH */

function searchProducts(){

let input = document.getElementById("searchInput");

if(!input) return;

let filter = input.value.toLowerCase();

let products = document.querySelectorAll(".card");

products.forEach(product => {

let titleElement = product.querySelector("h3");

if(!titleElement) return;

let title = titleElement.innerText.toLowerCase();

if(title.includes(filter)){
product.style.display = "";
}else{
product.style.display = "none";
}

});

}

/* WISHLIST */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(name,image,price){

let item = wishlist.find(p => p.name === name);

if(item){
alert("Already in Wishlist ❤️");
return;
}

wishlist.push({
name:name,
image:image,
price:price
});

localStorage.setItem("wishlist", JSON.stringify(wishlist));
updateWishlistCount();

alert(name + " added to Wishlist ❤️");
}
/* PAGE LOAD */
document.addEventListener("DOMContentLoaded", function(){

updateCartCount();
updateWishlistCount();

});
function updateWishlistCount(){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let wishlistCounter = document.getElementById("wishlist-count");

if(wishlistCounter){
wishlistCounter.innerText = wishlist.length;
}

}
