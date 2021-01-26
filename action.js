let initial_text_length = 0;
let typing_speed = 125;
let text = "Hello, I'm Desmond";
let delay = 4000;
let skill_length = 5;
let animate = true;

window.addEventListener('scroll', () => {
    let scrollValue = window.pageYOffset / document.body.offsetHeight
    let screen = document.body.offsetWidth
    
    if(scrollValue > 0.1 && animate && screen > 768){
        for(let i = 1; i<=skill_length;i++){
            let skill = document.querySelector(`.skill-${i}`)
            skill.style.animation = `fadeIn 2s linear both`;
        }
    }
    else {
        for(let i = 1; i<=skill_length;i++){
            let skill = document.querySelector(`.skill-${i}`)
            skill.style.animation = `2s fadeIn forwards`;
        }
    }
    animate = false
  });

function typing () {
    if (initial_text_length < text.length){
        document.getElementById("txt").innerHTML += text.charAt(initial_text_length);
        initial_text_length++;
        setTimeout(typing, typing_speed);
    }
}
setTimeout(typing,delay)
