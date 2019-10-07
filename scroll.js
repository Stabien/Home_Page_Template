/*
*  Scroll Js
*  put a nav on the top of the screen when scrolling > 200px
*/

var nav_link = document.getElementsByClassName("nav_onglet");
var nav = document.getElementById("nav_fixed_scroll");
var menu = document.getElementById("menu_deroulant");
var menu_banner = document.getElementById("menu_deroulant_banniere");
var sections = document.getElementsByTagName('section');

/* Definition var height section */

var height_section = [0, 0, 0, 0, 0];

for (var i = 0; i < 5; i++) {
    if (i === 0) {
        height_section[i] = 530 + sections[0].clientHeight;
    }
    else {
        height_section[i] = height_section[i - 1] + sections[i].clientHeight;
    }
}


/* end of definition */

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
    if (window.scrollY > 530 && window.scrollY < height_section[0]) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[1].style.borderBottom = "4px solid #0282ce";
        nav_link[1].style.color = "#0282ce";
    }
    if (window.scrollY > height_section[0] && window.scrollY < height_section[1]) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[2].style.borderBottom = "4px solid #0282ce";
        nav_link[2].style.color = "#0282ce";
    }
    if (window.scrollY > height_section[1] && window.scrollY < height_section[2]) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[3].style.borderBottom = "4px solid #0282ce";
        nav_link[3].style.color = "#0282ce";
    }
    if (window.scrollY > height_section[2] && window.scrollY < height_section[3]) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[4].style.borderBottom = "4px solid #0282ce";
        nav_link[4].style.color = "#0282ce";
    }
    if (window.scrollY > height_section[3] - 200) {
        for (var i = 0; i < 6; i++) {
            nav_link[i].style.borderBottom = "";
            nav_link[i].style.color = "";
        }
        nav_link[5].style.borderBottom = "4px solid #0282ce";
        nav_link[5].style.color = "#0282ce";
    }
});
