
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
        tag: "NewShoes",
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
 
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
      
    } else {
       localStorage.setItem("totalCost", product.price);
    }
    
    localStorage.setItem("totalCost", product.price);
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-sub");
    let cartCost = localStorage.getItem("totalCost");
    if( cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `

            <div class="product">
                <div class="image-container">
                <img src="../shop/${item.tag}.jpg"/>
                </div>
                <span>${item.name}</span>
                <span class="priceItem">$${item.price},00</span>
              <input type="Number" value="${item.incart}"/>
                <span class="total-price">$${item.incart * item.price},00</span>
              <i class="fas fa-times font"></i>
            </div>
               
            `;
        });
        productContainer.innerHTML += `
          
               <div class="table text-end">
                     <table>
                         <thead>
                             <tr>
                                 <td>SUBTOTAL</td>
                                 <td><h6>100.00 EGP</h6></td>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>SHIPING</td>
                                 <td><span>50.00 EGP</span></td>
                             </tr>
                                <tr>
                                 <td>TOTAL</td>
                                 <td><H2>$${cartCost},00 EGP</H2></td>
                             </tr>

                         </tbody>
                     </table>
                  
                 </div> 

            `;
 
    }
  
};



onLoadCartNumbers();
displayCart();

document.addEventListener("click", (e) => {
   if(e.target.classList.contains("font")) {   
      e.target.parentNode.remove();
 
}});

    


