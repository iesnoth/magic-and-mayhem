const hamberger = document.querySelector(".hamberger");
const navBar = document.querySelector(".navBar");

hamberger.addEventListener("click", () => {
    hamberger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".list").forEach(n => n. 
    addEventListener("click", () => {
        hamberger.classList.remove("active");
        navBar.classList.remove("active");
    }) )