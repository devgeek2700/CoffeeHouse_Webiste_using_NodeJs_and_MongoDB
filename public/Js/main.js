   // /* ************************ NAVBAR ******************* */


// Navbar Bar 

let navbar = document.querySelector('.navbar');
let bar_btn = document.querySelector('#bar_btn');
function ShowNavabr(){
    navbar.classList.toggle("active");
    searchform.classList.remove("active");
    cartcontainer.classList.remove("active");
}

bar_btn.addEventListener('click', ShowNavabr);



// Search Bar 

let searchform = document.querySelector('.search_form');
let serach_btn = document.querySelector('#serach_btn');
function ShowSearch(){
    searchform.classList.toggle("active");
    navbar.classList.remove("active");
    cartcontainer.classList.remove("active");
}


serach_btn.addEventListener('click', ShowSearch);

// Shopping Cart 

let cartcontainer = document.querySelector('.cart_container');
let cart_btn = document.querySelector('#cart_btn');
function ShowCart(){
    cartcontainer.classList.toggle("active");
    navbar.classList.remove("active");
    searchform.classList.remove("active");
}


cart_btn.addEventListener('click', ShowCart);


window.onscroll = () =>{
    navbar.classList.remove("active");
    searchform.classList.remove("active");
    cartcontainer.classList.remove("active");
}


//  plus minus buttons
let minus = document.getElementById('minus');
let qty_num = document.getElementById('qty_num');
let plus = document.getElementById('plus');
let currValue = 1;


function AddPlus(){
    currValue += 1;
    qty_num.innerHTML = currValue;
}

function SubMinus(){
    currValue -= 1;
    qty_num.innerHTML = currValue;
}

plus.addEventListener('click', AddPlus);
minus.addEventListener('click', SubMinus);




// *********************** BLOG DESECRPTION ******************************
function ShowDesc() {
    let myallprodinfo = document.getElementById("myallprodinfo");
    let allprodArrow = document.getElementById('allprodArrow');

    if (myallprodinfo.style.display === "none") {
        myallprodinfo.style.display = "block";
        allprodArrow.style.transform = 'rotate(-180deg)';

    } else {
        myallprodinfo.style.display = "none";
        allprodArrow.style.transform = 'rotate(-360deg)';

    }
}
function ShowDesc2() {
    let myallprodinfo2 = document.getElementById("myallprodinfo2");
    let allprodArrow2 = document.getElementById('allprodArrow2');

    if (myallprodinfo2.style.display === "none") {
        myallprodinfo2.style.display = "block";
        allprodArrow2.style.transform = 'rotate(-180deg)';

    } else {
        myallprodinfo2.style.display = "none";
        allprodArrow2.style.transform = 'rotate(-360deg)';

    }
}
function ShowDesc3() {
    let myallprodinfo3 = document.getElementById("myallprodinfo3");
    let allprodArrow3 = document.getElementById('allprodArrow3');

    if (myallprodinfo3.style.display === "none") {
        myallprodinfo3.style.display = "block";
        allprodArrow3.style.transform = 'rotate(-180deg)';

    } else {
        myallprodinfo3.style.display = "none";
        allprodArrow3.style.transform = 'rotate(-360deg)';

    }
}
function ShowDesc4() {
    let myallprodinfo4 = document.getElementById("myallprodinfo4");
    let allprodArrow4 = document.getElementById('allprodArrow4');

    if (myallprodinfo4.style.display === "none") {
        myallprodinfo4.style.display = "block";
        allprodArrow4.style.transform = 'rotate(-180deg)';

    } else {
        myallprodinfo4.style.display = "none";
        allprodArrow4.style.transform = 'rotate(-360deg)';

    }
}

