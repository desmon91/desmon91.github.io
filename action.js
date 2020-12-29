let i = 0;
let text = "Hi, my name is Desmond.";
let speed = 125;
const skills = document.querySelectorAll(".skill")
const contact = document.querySelector(".contact_content")
let animate = true;

window.addEventListener('scroll', () => {
    let scrollValue = window.pageYOffset / document.body.offsetHeight
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    let animationArr = []
    for(let i = 0; i < skills.length; i++ ){
        animationArr.push(getRandomInt(3))
    }
    if(scrollValue > 0.5 && animate){
        for(let i = 0; i < skills.length; i++ ){
             skills[i].style.animation = `flicker-in${animationArr[i]} 3.5s linear both`;
        }
        animate = false
    }
    if (scrollValue > 0.8){
           return contact.style.animation = "fade-in 3s linear both";
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