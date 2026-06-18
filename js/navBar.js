let menuOpen = false;

function toggleMenu() {
    let mobileMenu = document.getElementById("mobileMenu");

    if (menuOpen == false) {
        mobileMenu.classList.remove("hidden");
        menuOpen = true;
    } else {
        mobileMenu.classList.add("hidden");
        menuOpen = false;
    }
}


window.addEventListener("scroll", function () {
    let nav = document.getElementById("navBar");
    if (window.scrollY > 10) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});