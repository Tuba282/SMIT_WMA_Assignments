// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx dashboardPages
var dashboardPages = document.getElementById("dashboardPages")
var dashboardPagesList = [
    'Dashboard',
    'Contact list',
    'SMS sender',
    'Web pages',
    'Gallery',
    'Setting'
]
var dashboardPagesIcons = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#6b7485"><path stroke="#6b7485" d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6m0 12c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C3.9 14 4.6 14 6 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C10 15.9 10 16.6 10 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18m12 0c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18"/><path fill="#6b7485" d="m15.348 9.856l-.157-.734zm-1.204-1.204l.734.157zm.877-2.54l-.53-.53zm2.867 2.867l.53.53zm3.908-5.502l.65-.375zm-.6 2.194l-.53-.53zm.6-.673l.65.375zm-1.273-2.794l.375-.65zm-2.195.6l.53.53zm.674-.6l-.375-.65zm1.664 2.937L17.358 8.45l1.06 1.06l3.309-3.307zM15.55 6.642l3.308-3.308l-1.06-1.06L14.49 5.58zm-.36 2.48c-.176.038-.316.068-.436.09a2 2 0 0 1-.255.037c-.056.003-.052-.003-.018.006a.4.4 0 0 1 .166.097l-1.06 1.06c.323.324.728.352 1.007.334c.265-.017.589-.088.91-.157zm-1.78-.627c-.069.321-.14.645-.157.91c-.018.28.01.684.334 1.007l1.06-1.06a.4.4 0 0 1 .097.165c.01.035.003.039.006-.017c.004-.054.014-.133.037-.255c.022-.12.052-.26.09-.436zm7.255-5.16c.367.367.442.451.48.517l1.3-.75c-.162-.28-.42-.53-.72-.828zm1.06 2.867c.3-.3.558-.548.72-.829l-1.3-.75c-.038.066-.113.15-.48.518zm-.58-2.35a.77.77 0 0 1 0 .771l1.3.75a2.27 2.27 0 0 0 0-2.27zm.58-1.578c-.299-.3-.548-.558-.828-.72l-.75 1.3c.066.038.15.113.518.48zm-2.867 1.06c.367-.367.452-.442.518-.48l-.75-1.3c-.28.162-.53.42-.829.72zm2.039-1.78a2.27 2.27 0 0 0-2.271 0l.75 1.3a.77.77 0 0 1 .77 0zm-3.54 6.895c-.196.196-.463.322-.843.419c-.19.048-.393.086-.619.125c-.217.038-.466.078-.705.13l.313 1.466c.202-.043.41-.077.648-.118c.23-.04.483-.085.735-.15c.504-.129 1.066-.346 1.532-.811zm-2.48.36c.05-.24.091-.488.129-.705c.039-.226.077-.43.125-.62c.097-.38.223-.646.419-.842l-1.06-1.06c-.466.465-.683 1.027-.812 1.531c-.065.252-.11.506-.15.735c-.041.239-.075.446-.118.647z"/></g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#6b7485" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="#6b7485" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 3h10v8h-3l-4 2v-2h-3z"/><path d="M15 16v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2m2 13v.01"/></g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="#6b7485"><path fill-rule="evenodd" d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2h-2v6h2z" clip-rule="evenodd"/><path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"/><path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"/></g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#6b7485" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="#6b7485" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.876a2.3 2.3 0 0 1 3.141.104l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><g fill="none" stroke="#6b7485"><path d="m13.258 8.354l.904.805a.91.91 0 0 1 .196 1.169l-1.09 1.862a.94.94 0 0 1-.35.341a1 1 0 0 1-.478.125a1 1 0 0 1-.306-.046l-1.157-.382q-.304.195-.632.349l-.243 1.173a.93.93 0 0 1-.339.544a.97.97 0 0 1-.618.206H6.888a.97.97 0 0 1-.618-.206a.93.93 0 0 1-.338-.544l-.244-1.173a6 6 0 0 1-.627-.35L3.9 12.61a1 1 0 0 1-.306.046a1 1 0 0 1-.477-.125a.94.94 0 0 1-.35-.34l-1.129-1.863a.91.91 0 0 1 .196-1.187L2.737 8v-.354l-.904-.805a.91.91 0 0 1-.196-1.169L2.766 3.81a.94.94 0 0 1 .35-.341a1 1 0 0 1 .477-.125a1 1 0 0 1 .306.028l1.138.4q.305-.195.632-.349l.244-1.173a.93.93 0 0 1 .338-.544a.97.97 0 0 1 .618-.206h2.238a.97.97 0 0 1 .618.206c.175.137.295.33.338.544l.244 1.173q.325.155.627.35l1.162-.382a.98.98 0 0 1 .784.078c.145.082.265.2.35.34l1.128 1.863a.91.91 0 0 1-.182 1.187l-.918.782z"/><path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"/></g></svg>`
]
let ids = [
    'Dashboard',
    'Contact',
    'SMS',
    'Web',
    'Gallery',
    'Setting'
]
function page() {

    for (var i = 0; i < dashboardPagesList.length; i++) {
        var li = document.createElement("li")
        li.setAttribute("id", `${ids[i]}`)
        var liContent = ` ${dashboardPagesIcons[i]}  ${dashboardPagesList[i]}`
        li.innerHTML = liContent;
        dashboardPages.appendChild(li)
    }

}
page()

// xxxxxxxxxxxxxxxxxxxxxxxxx toggle menu
let toggle = document.getElementById("toggle");


toggle.addEventListener("click", () => {
    dashboardPages.classList.toggle("show-links");
});


// xxxxxxxxxxxxxxxxxxxxxxxxx setting up user Name and Avatar

const set_userName_userAvatar = () => {
    let userName = localStorage.getItem('userName');
    let userGender = localStorage.getItem('userGender');

    if (userName) {
        document.getElementById("gotUserName").innerText = userName;
        document.querySelector(".gotUserName").innerText = userName;
    }

    if (userGender === 'male') {
        document.getElementById("userAvatar").src = "./assets/userBoy.png";
    } else if (userGender === 'female') {
        document.getElementById("userAvatar").src = "./assets/userGirl.png";
    }
};

window.addEventListener("DOMContentLoaded", set_userName_userAvatar);



// xxxxxxxxxxxxxxxxxxxxxxxxx setting up product data

async function getProductData() {
    try {
        const response = await fetch("https://dummyjson.com/products").then((res) => res.json());
        const products = response.products;

        const renderProductTable = (data) => {
            const productTable = document.getElementById("productTable");
            productTable.innerHTML = `
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Warranty</th>
                    <th>Ratings</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Wish List</th>
                </tr>
            `;

            data.forEach((product) => {
                const { title, price, thumbnail, rating, stock, category, warrantyInformation, description } = product;

                let row = document.createElement("tr");
                row.setAttribute("class", "row");

                row.innerHTML = `
                    <td><img src="${thumbnail}" alt="${title}" /></td>
                    <td>${title}</td>
                    <td>$ ${price}</td>
                    <td>${warrantyInformation || "No warranty"}</td>
                    <td>${rating}</td>
                    <td>${category}</td>
                    <td>${stock}</td>
                    <td>
                        <img src="./assets/heartEmpty.png" class="like" />
                    </td>
                `;

                const cartIcon = row.querySelector(".like");
                cartIcon.addEventListener("click", () => {
                    // cartIcon.stopPropagation()
                    cartIcon.setAttribute("src", "./assets/heartFull.png");
                    const addtoCart = document.getElementById("addtoCart").textContent;
                    document.getElementById("addtoCart").textContent = parseInt(addtoCart) + 1;
                });

                productTable.appendChild(row);

                row.addEventListener("click", () => {
                    localStorage.setItem('title', title);
                    localStorage.setItem('price', price);
                    localStorage.setItem('thumbnail', thumbnail);
                    localStorage.setItem('rating', rating);
                    localStorage.setItem('stock', stock);
                    localStorage.setItem('warrantyInformation', warrantyInformation);
                    localStorage.setItem('category', category);
                    localStorage.setItem('description', description);
                    setTimeout(() => {
                        window.open("cart.html", "_blank");
                    }, 1500);
                });
            });
        };

        renderProductTable(products);

        const filterProducts = (callback) => {
            const filteredProducts = callback(products);
            renderProductTable(filteredProducts);
        };

        document.getElementById("searchItem").addEventListener("input", () => {
            const searchItem = document.getElementById("searchItem").value.toLowerCase();
            filterProducts((products) => products.filter(product => product.title.toLowerCase().includes(searchItem)));
        });

        function dropdown() {
            const dropdownContent = document.getElementById("dropdownContent");
            fetch("https://dummyjson.com/products").then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    
                    const categories = [
                        ...new Set(data.products.map((product) => product.category))
                    ];
                    dropdownContent.innerHTML = categories.map((category) => {
                        return `<p data-value="${category}">${category}</p>`;
                    }).join("");

                    // Add event listener to each category link
                    document.querySelectorAll('#dropdownContent p').forEach((link) => {
                        link.addEventListener('click', function () {
                            const selectedCategory = this.getAttribute('data-value');
                            filterCategory(selectedCategory, data.products)
                        });
                    });
                }).catch((error) => {
                    console.log("Error in Search Filter", error);
                });
        }

        function filterCategory(itms, product) {
            const allProducts = document.querySelectorAll(".row");
            allProducts.forEach((product) => {
                const category = product.children[5].textContent.toLowerCase();
                if (category.includes(itms)) {
                    product.style.display = "table-row";
                } else {
                    product.style.display = "none";
                }
            })
        }
        dropdown();
        // sort by lowPrice
        document.querySelector(".lowPrice").addEventListener("click", () => {
            filterProducts((products) => [...products].sort((a, b) => a.price - b.price));
        });
        // sort by highPrice
        document.querySelector(".highPrice").addEventListener("click", () => {
            filterProducts((products) => [...products].sort((a, b) => b.price - a.price));
        });
        // sort by ascendingOrder
        document.querySelector(".ascendingOrder").addEventListener("click", () => {
            filterProducts((products) => [...products].sort((a, b) => a.title.localeCompare(b.title)));
        });
        // sort by descendingOrder
        document.querySelector(".descendingOrder").addEventListener("click", () => {
            filterProducts((products) => [...products].sort((a, b) => b.title.localeCompare(a.title)));
        });

    } catch (error) {
        console.log("Error in Fetching data from dummyjson.com/products", error);
        const productTable = document.getElementById("productTable");
        productTable.innerHTML = "<h2>Sorry, Something went wrong. Please try again later...</h2>";
    }
}

getProductData();
