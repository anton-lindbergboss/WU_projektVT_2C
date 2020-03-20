function toggleMeny() {
    
    document.querySelector(".navLinks").classList.toggle("navActive")
}

document.querySelector(".hamburger").addEventListener("click", toggleMeny)

/* Notera att den största delen javascript 
finns i html-filerna med hjälp av taggen <script>.*/


