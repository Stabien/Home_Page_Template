/*
*  Scroll Js
*  put a nav on the top of the screen when scrolling > 200px
*/

var nav_link = document.getElementsByClassName("nav_onglet");
var nav = document.getElementById("nav_fixed_scroll");
var menu = document.getElementById("menu_deroulant");
var menu_banner = document.getElementById("menu_deroulant_banniere");

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        nav.style.top = "0%";
    }
    if (window.scrollY > 400) {
        menu_banner.style.display = "none";
    }
    if (window.scrollY <= 199) {
        nav.style.top = "-15%";
        menu.style.display = "none";
    }
    if (window.scrollY < 600) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[0].style.borderBottom = "4px solid #0282ce";
        nav_link[0].style.color = "#0282ce";
    }
    if (window.scrollY > 530 && window.scrollY < 1295) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[1].style.borderBottom = "4px solid #0282ce";
        nav_link[1].style.color = "#0282ce";
    }
    if (window.scrollY > 1295 && window.scrollY < 1945) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[2].style.borderBottom = "4px solid #0282ce";
        nav_link[2].style.color = "#0282ce";
    }
    if (window.scrollY > 1945 && window.scrollY < 2645) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[3].style.borderBottom = "4px solid #0282ce";
        nav_link[3].style.color = "#0282ce";
    }
    if (window.scrollY > 2645 && window.scrollY < 3295) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[4].style.borderBottom = "4px solid #0282ce";
        nav_link[4].style.color = "#0282ce";
    }
    if (window.scrollY > 3295) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[5].style.borderBottom = "4px solid #0282ce";
        nav_link[5].style.color = "#0282ce";
    }
});
