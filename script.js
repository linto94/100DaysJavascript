// Smooth Scroll
const links = document.querySelectorAll(".nav-list li a");

for (link of links) (
     link.addEventListener("click", smoothScroll)
);

function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })

};



// Avtive Menu
const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
    const navLink = e.target.parentElement;
      if (navLink.classList.contains("link")) {
        navList.querySelector(".active").classList.remove
        ("active");
        navLink.classList.add("active");
      }
});