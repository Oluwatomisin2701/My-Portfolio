let menu = document.querySelector(".fa-bars");
let ul = document.querySelector("nav ul")

menu.addEventListener("click",function(){
    ul.classList.toggle("showmenu")
})


let sun = document.querySelector("li .fa-sun");
let moon = document.querySelector("li .fa-moon");

moon.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme");
    sun.classList.toggle("show");
    moon.classList.toggle("hide");
})
sun.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme");
    sun.classList.toggle("show");
    moon.classList.toggle("hide");
})