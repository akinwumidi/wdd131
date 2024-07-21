// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger")
let backdropdiv = document.querySelector(".backdrop")
let navCon = document.querySelector(".mobile-nav-container ")


function toggleClassName() {
    hamburgerdiv.classList.toggle('crossburger')
    navCon.classList.toggle('show-mobile-navcontainer')
    backdropdiv.classList.toggle('showbackdrop')
}

hamburgerdiv.addEventListener("click", toggleClassName)
backdropdiv.addEventListener("click", toggleClassName)
// Animated hamburger menu ends here

// Window onscroll implementation starts here

window.addEventListener("scroll", () => {
    let nav = document.querySelector(".header-nav");
    let scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 1) {
        nav.classList.add("header-nav-sticky")
    }
    else {
        nav.classList.remove("header-nav-sticky")
    }
})

// Window onscroll implementation ends here