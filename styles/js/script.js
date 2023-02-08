let search_box = document.querySelector(".search-box");
let Btn_search_box = document.querySelector(".bx-search");

// var slideIndex = 1;
// var header = document.getElementById("myHeader");

// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n){
//     var x = document.getElementsByClassName("mySlides");

//     if (n > x.length){
//         slideIndex = 1;
//     }

//     if (n < 1){
//         slideIndex = x.length;
//     }

//     for (var i = 0; i < x.length; i++){
//         x[i].style.display = "none";
//     }

//     x[slideIndex-1].style.display = "block";
// }

Btn_search_box.addEventListener("click", ()=>{
    search_box.classList.toggle("show");
})

// sticky header top
// var sticky = header.offsetTop;

// window.onscroll = function(){
//     myFunction();
// }

// function myFunction(){
//     if (window.pageYOffset > sticky){
//         header.classList.add("stuck");
//     } else {
//         header.classList.remove("stuck");
//     }
// }