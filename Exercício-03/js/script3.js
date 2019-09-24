const section1 = document.getElementById("primeira-section");
const section2 = document.getElementById("segunda-section");
const section3 = document.getElementById("terceira-section");


document.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop >= 200){
        section1.classList.add("section-um");
    }
    
    if(document.documentElement.scrollTop >= 400){
        section2.classList.add("section-dois");
    }

    if(document.documentElement.scrollTop >= 600){
        section3.classList.add("section-tres");
    }
});