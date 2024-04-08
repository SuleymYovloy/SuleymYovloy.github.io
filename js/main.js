window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;
    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("header");
        } else {
            document.querySelector("header").classList.remove("header");
        }
    }
};

// Navigation Links

const navbar = document.querySelector(".navbar");
const a = navbar.querySelectorAll("a");

a.forEach((element) => {
    element.addEventListener("click", function () {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        console.log(this);
        this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
    });
});

// Hamburger Menu
const menu = document.querySelector(".ham-burger-menu");
menu.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show");
});
