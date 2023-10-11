const headerNavbar = document.getElementById("header-navbar")
const headerNavbarOpenBtn = document.getElementById("header-nav-open-btn")
const headerNavbarCloseBtn = document.getElementById("header-nav-close-btn")

headerNavbarOpenBtn.addEventListener("click", ()=>{
    headerNavbar.classList.add('nav-open')
    headerNavbar.classList.remove('nav-close')
})

headerNavbarCloseBtn.addEventListener("click", ()=>{
    headerNavbar.classList.remove('nav-open')
    headerNavbar.classList.add('nav-close')
})
