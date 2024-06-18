const hamburger = document.querySelector(".hamburger-menu");
const nav_mobile = document.querySelector(".nav-mobile");
const backdrop = document.querySelector(".backdrop")

const handleMobileNav =()=>{
    hamburger.classList.toggle("transform-menu")
    nav_mobile.classList.toggle("show-nav-mobile")
    backdrop.classList.toggle("show-backdrop")
}

hamburger.addEventListener("click",handleMobileNav)
backdrop.addEventListener("click",handleMobileNav)