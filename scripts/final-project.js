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