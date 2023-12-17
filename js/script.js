window.addEventListener("DOMContentLoaded", function () {
    let hamburger = this.document.querySelector(".hamburger"),
        menu = this.document.querySelector(".menu"),
        menuItem = this.document.querySelectorAll(".menu_link")
    
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("hamburger_active")
        menu.classList.toggle("menu_active")

    menuItem.forEach(element => {
        element.addEventListener("click", function () {
            hamburger.classList.toggle("hamburger_active")
            menu.classList.toggle("menu_active")
        })
    });
    })
})