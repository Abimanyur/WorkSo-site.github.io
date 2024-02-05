const navToggle = document.getElementById("menu-icon")
const navbar =document.querySelector("nav")
const navlink =document.querySelectorAll('li')
const scrollContainer = document.querySelector(".pricing-body")
let backBtn =document.getElementById("prevBtn")
let nextBtn =document.getElementById("nextBtn")


navToggle.addEventListener("click", function(){
    navbar.classList.toggle("link-show")
})

navlink.forEach(function (link){

    link.addEventListener("click",function(){
        navbar.classList.remove("link-show")
    })
})

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth" 
    scrollContainer.scrollLeft += 250;

})

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth"
    scrollContainer.scrollLeft -= 250;
})

// let sections =document.querySelectorAll(".anime")
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset =sec.offsetTop;
//         let height =sec.offsetHeight;
//         console.log(top)
//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate');
//         }
//         else {
//              sec.classList.remove('show-animate');
//         }
//  })
// }
console.log("hello world")