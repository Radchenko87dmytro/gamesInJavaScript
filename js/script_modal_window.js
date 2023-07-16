//Modal window game
let modalButton = document.querySelectorAll(".show-modal")
let modal = document.querySelector(".modal")
let btnCloseModal = document.querySelector(".close-modal")
let overlay = document.querySelector(".overlay")
const audio = new Audio("Mountain Audio - Menu Click.mp3")

for(let value of modalButton){
value.addEventListener("click", ()=>{
    console.log("modal");
    overlay.classList.toggle("hidden")
    modal.classList.toggle("hidden")
    audio.play()
})
}

btnCloseModal.addEventListener("click", ()=>{
    overlay.classList.toggle("hidden")
    modal.classList.toggle("hidden")
    audio.play()
})

overlay.addEventListener("click", ()=>{
    overlay.classList.toggle("hidden")
    modal.classList.toggle("hidden")
    audio.play()
})

document.addEventListener("keydown", (event)=>{
    audio.play()
    console.log(event.key);
    if (event.key=="Escape" && !modal.classList.contains("hidden")) {
        overlay.classList.toggle("hidden")
        modal.classList.toggle("hidden")
    }
})
 