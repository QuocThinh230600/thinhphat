let search_box = document.querySelector(".search-box");
let Btn_search_box = document.querySelector(".bx-search");
let short_description_post = document.querySelector(".shot-description-services");
let show_menu_mobile = document.querySelector(".bx-menu");
let slider_menu = document.querySelector(".slider-menu");
let close_slider = document.querySelector(".bxs-x-circle");
let show_chil_menu_mobile = document.querySelectorAll(".arrow");
let pagination = document.querySelector(".pagination-item");

Btn_search_box.addEventListener("click", () => {
    search_box.classList.toggle("show");
});

show_menu_mobile.addEventListener("click", () => {
    slider_menu.classList.toggle("show");
});

close_slider.addEventListener("click", () => {
    slider_menu.classList.remove("show");
});

for (var i = 0; i < show_chil_menu_mobile.length; i++) {
    show_chil_menu_mobile[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;

        arrowParent.classList.toggle("show-menu");
    });
}

// pagination > news
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll(".post-services");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 9;
const pageCount = Math.ceil(listItems.length / paginationLimit);

let currentPage = 1;

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});

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
