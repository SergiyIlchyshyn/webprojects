const nav = document.querySelector("nav");

window.addEventListener('scroll', function() {
    nav.classList.toggle("black", window.scrollY > 0);
});