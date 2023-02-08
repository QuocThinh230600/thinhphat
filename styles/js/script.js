var slideIndex = 1;
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n){
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = x.length;
    }

    for (var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

window.onscroll = function(){
    myFunction();
}

function myFunction(){
    if (window.pageYOffset > sticky){
        header.classList.add("stuck");
    } else {
        header.classList.remove("stuck");
    }
}