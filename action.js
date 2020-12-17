let i = 0;
let text = "Hi, my name is Desmond.";
let speed = 125;
const skills = document.querySelectorAll(".skill")
const contact = document.querySelector(".contact_content")

window.addEventListener('scroll', () => {
    let scrollValue = window.pageYOffset / document.body.offsetHeight
    if(scrollValue > 0.5){
        for (skill of skills){
            skill.style.animation = "flicker-in 2s linear both";
        }
    }
    if (scrollValue > 0.8){
            contact.style.animation = "fade-in 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }
   
  });

function typing () {
    if (i < text.length){
        document.getElementById("txt").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

typing()