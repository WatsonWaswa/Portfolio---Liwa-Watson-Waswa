/*navbar*/

const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    navLinks.classList.toggle("active")
}

/*animated motion on text*/

var typed = new Typed(".input",{
    strings:["Web Designer","Frontend Developer","Backend Developer","Graphic Designer", "Social Media Marketor", "CV/Resume Writer",   ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})

/*button click sound*/

const audio = new Audio();
audio.src = "sounds/click.mp3";