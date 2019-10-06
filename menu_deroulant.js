/*
*  menu_deroulant
*  displays or hides the menu when clicking on the button
*/

var button = document.getElementById("button_display");
var banner_button = document.getElementById("menu_button");
var menu = document.getElementById("menu_deroulant");
var menu_banner = document.getElementById("menu_deroulant_banniere");
var nav_deroulant = document.getElementsByClassName("nav_deroulant");

button.addEventListener('click', function() {
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
});

banner_button.addEventListener('click', function() {
    if (menu_banner.style.display === "none") {
        menu_banner.style.display = "flex";
    }
    else {
        menu_banner.style.display = "none";
    }
});

for (var i = 0; i < 6; i++) {
    nav_deroulant[i].addEventListener('click', function () {
        menu.style.display = "none";
    });
}

window.addEventListener('resize', function () {
    if (screen.width >= 901) {
        menu.style.display = "none";
        menu_banner.style.display = "none";
    }
});
