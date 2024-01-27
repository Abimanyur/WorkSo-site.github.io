const navToggle = document.getElementById("menu-icon")
const navbar =document.querySelector("nav")

navToggle.addEventListener("click", function(){
    navbar.classList.toggle("link-show")
})
console.log("hello world")