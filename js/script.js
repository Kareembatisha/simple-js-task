var all_product = document.querySelectorAll(".content .card");
var price_div = document.querySelector(".product-div");
var price_btn = document.querySelector(".price-btn");
var totalPrice = 0;
var reselt_price = document.querySelector(".reselt-price");



all_product.forEach(function(item){
    item.onclick = function(){
        price_div.innerHTML += item.getAttribute("color") +" " ;
        totalPrice += +(item.getAttribute("price")) ;
        if(price_div.textContent != ""){
            price_btn.style.display = "block";
}
    }
})

price_btn.onclick = function(){
    reselt_price.innerHTML = `${totalPrice} L.E`
}





































