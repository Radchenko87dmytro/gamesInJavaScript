"use strict";


const letters = document.querySelectorAll(".boxes__box")
const audio = new Audio("Mountain Audio - Menu Click.mp3")
const audioWin = new Audio("huge win.wav")
let newLetters

for(let i=0; i<letters.length; i++){
  letters[i].addEventListener("click", ()=>{
    if(letters[i].previousElementSibling != null){
      letters[i].previousElementSibling.before(letters[i])
      audio.play()
        newLetters = document.querySelectorAll(".boxes__box")

        console.log(newLetters);
    } else if(letters[i].nextElementSibling != null){
      letters[i].nextElementSibling.after(letters[i])
      audio.play()
      newLetters = document.querySelectorAll(".boxes__box")

      console.log(newLetters);
    };
    if(
      newLetters[0].classList.contains("box_a")  &&
      newLetters[1].classList.contains("box_b")  &&
      newLetters[2].classList.contains("box_c")  &&
      newLetters[3].classList.contains("box_d")  &&
      newLetters[4].classList.contains("box_e")  &&
      newLetters[5].classList.contains("box_f")  
       ){
        audioWin.play()
       }
    
  })
}


