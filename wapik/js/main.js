
const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header-right-con nav ul");
    const navLinks = document.querySelectorAll(".header-right-con nav ul li");
    // toggle nav 

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        // animate links
        navLinks.forEach((link,i) =>{
            if(link.style.animation){
                link.style.animation = ""
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${i /7 + 0.5}s`;

            }
            
        });
    })
}

navSlide();






