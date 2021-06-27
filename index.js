window.addEventListener("scroll", function(){
            var navbar = document.querySelector("nav");
            navbar.classList.toggle("sticky", window.scrollY > 0);
        });

document.querySelector(".toggler-icon").addEventListener("click", function(){
    var togglebg = document.querySelector('nav');
    togglebg.classList.toggle("bgcolor");
});

