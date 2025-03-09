//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx loader show-up


let loader = document.getElementById("cartLoader")
let container = document.getElementById("cartContainer")
window.addEventListener("load", () => {
    loader.style.display = "flex"
    container.style.display = "none"
    setTimeout(() => {
        loader.style.display = "none"
        container.style.display = "flex"
    }, 2000)
})

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx show cart items

const title = localStorage.getItem('title');
const price = localStorage.getItem('price');
const thumbnail = localStorage.getItem('thumbnail');
const rating = localStorage.getItem('rating');
const stock = localStorage.getItem('stock');
const warrantyInformation = localStorage.getItem('warrantyInformation');
const category = localStorage.getItem('category');
const description = localStorage.getItem('description');

console.log(title, price, thumbnail, rating, stock, warrantyInformation, category, description);

document.querySelector(".title").innerText = title;
document.querySelector(".price").innerText = `$${price}`;
document.querySelector(".productImage img").src = thumbnail;
document.querySelector(".rating").innerText = `Rating: ${rating}/5`;
document.querySelector(".stock").innerText = `In Stock: ${stock}`;
document.querySelector(".warranty").innerText = `Warranty: ${warrantyInformation}`;
document.querySelector(".category span").innerText = category;
document.querySelector(".description").innerText = `Description: ${description}`;
