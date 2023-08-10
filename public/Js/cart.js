// Increment/Decrement quantity

let product_total_amt = document.getElementById('tot_diff_price');
let shipping_charge = document.getElementById('shipping_charge');
let total_cart_amt = document.getElementById('total_cart_amt');
let discount_code1 = document.getElementById('discount_code1');
let error_trw = document.getElementById('error_trw');


const decrement = (incdec, price) =>{
    let itemval = document.getElementById(incdec);
    let itemprice = document.getElementById(price);
    if(itemval.value <= 1){
        itemval.value = 1;
    }else{
        itemval.value = parseInt(itemval.value ) - 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 541;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 541;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(shipping_charge.innerHTML);
        itemval.style.background = "#fff";
        itemval.style.color = "rgb(102, 36, 36)";
    }
}

const increment = (incdec, price) =>{
    let itemval = document.getElementById(incdec);
    let itemprice = document.getElementById(price);
    if(itemval.value > 10){
        itemval.value = 10;
        alert("Quantity Cannot be incremented more than 10");
        itemval.style.background = "brown";
        itemval.style.color = "#fff";
    }else{
        itemval.value = parseInt(itemval.value ) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 541;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 541;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}




// Add A Discount Code

function ShowCoupon(){
    let collapseExample = document.getElementById("collapseExample");

    if (collapseExample.style.display === "none") {
        collapseExample.style.display = "block";

    } else {
        collapseExample.style.display = "none";
    }
}


// Apply Discount


const discount_code = () =>{
    let total_curr = parseInt(total_cart_amt.innerHTML);
    if(discount_code1.value === "Coffeehouse"){
        total_curr = total_curr - 500;
        total_cart_amt.innerHTML = total_curr;
        error_trw.innerHTML = "Coupon Applied!";
    }
    else{
        error_trw.innerHTML = "Invalid Coupon!";
    }
}


// Heart button
let heartBtn = document.getElementById("heartBtn");

heartBtn.addEventListener("click", () => {
  if (heartBtn.classList.contains("liked")) {
    heartBtn.classList.remove("liked");
  } else {
    heartBtn.classList.add("liked");
  }
});

let heartBtn1 = document.getElementById("heartBtn1");

heartBtn1.addEventListener("click", () => {
  if (heartBtn1.classList.contains("liked")) {
    heartBtn1.classList.remove("liked");
  } else {
    heartBtn1.classList.add("liked");
  }
});

let heartBtn2 = document.getElementById("heartBtn2");

heartBtn2.addEventListener("click", () => {
  if (heartBtn2.classList.contains("liked")) {
    heartBtn2.classList.remove("liked");
  } else {
    heartBtn2.classList.add("liked");
  }
});

let heartBtn3 = document.getElementById("heartBtn3");

heartBtn3.addEventListener("click", () => {
  if (heartBtn3.classList.contains("liked")) {
    heartBtn3.classList.remove("liked");
  } else {
    heartBtn3.classList.add("liked");
  }
});