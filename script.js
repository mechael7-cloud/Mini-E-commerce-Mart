const buttonNavbar = document.getElementById("button-navbar");
const navtiveBar = document.getElementById("native-bar");

console.log(navtiveBar);
console.log(buttonNavbar)

buttonNavbar.addEventListener("click", function () {
    navtiveBar.classList.toggle("show");
});