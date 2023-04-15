var btn = document.querySelector(".category .sort .your select");
const productChoose = document.querySelectorAll(".stars");

 btn.addEventListener("change", function(){
 
    var check = btn.options[btn.selectedIndex].value;
    console.log(check);
     productChoose.forEach( lol => {
         if(check === "newest") {
             lol.style.display = "block";
         } else {
             if(lol.classList.contains(check)) {
                 lol.style.display = "block";
             } else {
                 lol.style.display = "none";
             }
         }
     })
})


const search = document.getElementById("search");
search.addEventListener("keyup", function(e) {
    searchWeso = search.value;
    for (i = 0; i < productChoose.length; i++) {
        if(productChoose[i].classList.contains(searchWeso)) {
            productChoose[i].style.display = "block";
        } else if(searchWeso == ""){
             productChoose[i].style.display = "block";
        } else {
             productChoose[i].style.display = "none";
        }
    }
}) 


// start shopping cart


let shoppingCart = document.getElementsByClassName("add-cart");
let cart = document.querySelector("#cart");

let products = [
    {
        name: "New Shoe",
        tag: "NewShoe",
        price: 32.00,
        incart: 0
    },
    {
        name: "New T-shirt",
        tag: "NewT-shirt",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Watch",
        tag: "NewWatch",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Bike",
        tag: "NewBike",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Shoes",
        tag: "NewShoe",
        price: 32.00,
        incart: 0
    },
    {
        name: "New T-shirt",
        tag: "NewT-shirt",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Watch",
        tag: "NewWatch",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Bike",
        tag:"NewBike",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Bike",
        tag: "NewBike",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Watch",
        tag:  "NewWatch",
        price: 32.00,
        incart: 0
    },
    {
        name: "New Bag",
        tag:  "NewBag",
        price: 32.00,
        incart: 0
    },
];


for(let i=0; i < shoppingCart.length; i++) {
   
    shoppingCart[i].addEventListener("click", function() {
        cartNumber(products[i]);
        totalCost(products[i]);
    })
 
}
function onLoadCartNumbers() {
    let productNumber = localStorage.getItem("cartNumbers");
    if(productNumber) {
         document.querySelector("#cart").textContent = productNumber;
    }
   
}
function cartNumber(product) {
 
   let productnumber = localStorage.getItem("cartNumbers");
    productnumber = parseInt(productnumber)
    
    if(productnumber) {
        localStorage.setItem("cartNumbers", productnumber + 1);
        document.querySelector("#cart").textContent  = productnumber + 1;
    } else{
        localStorage.setItem("cartNumbers",  1);
        document.querySelector("#cart").textContent = 1;
    }
   setItem(product);
}
function setItem(product) {
   let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart += 1;
    } else {
        product.incart = 1;
        cartItems = {
        [product.tag]: product
        }
    }
  
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
 let cartCost = localStorage.getItem("totalCost");
  
    localStorage.setItem("totalCost", product.price);
    if(cartCost != null) {
           cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
       
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}


onLoadCartNumbers();
