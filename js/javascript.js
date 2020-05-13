function toggleMeny() {
    
    document.querySelector(".navLinks").classList.toggle("navActive")
}

document.querySelector(".hamburger").addEventListener("click", toggleMeny)

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

/* Notera att den största delen javascript 
finns i html-filerna med hjälp av taggen <script>.*/


