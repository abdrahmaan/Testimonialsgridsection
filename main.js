let welcome = document.querySelector(".welcome");
let head = document.querySelector(".welcome h2");
let endDate = document.querySelector(".welcome p");

setTimeout(() => {
head.style.transform = "translateY(0px)";
endDate.style.transform = "translateY(0px)";
}, 500);


setTimeout(() => {
    welcome.style.opacity = 0;
    setTimeout(() => {
        welcome.style.zIndex= "-1";
    }, 1700);
}, 2200);