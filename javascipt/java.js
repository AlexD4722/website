var btnOpen = document.querySelector(".icon--open");
var btnClose = document.querySelector(".icon--close");
var navbar = document.querySelector(".navbar");
var navbarMenu = document.querySelector(".navbar__menu");
var heightNavbar = navbar.clientHeight

btnOpen.onclick = function(){
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
    navbar.style.height = "auto";
}
btnClose.onclick = function(){
    btnOpen.style.display = "block";
    btnClose.style.display = "none";
    navbar.style.height = "79px";
}

