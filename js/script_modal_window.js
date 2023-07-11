//Modal window game
let modalButton = document.querySelectorAll(".show-modal")
let modal = document.querySelector(".modal")
let btnCloseModal = document.querySelector(".close-modal")
let overlay = document.querySelector(".overlay")

for(let value of modalButton){
value.addEventListener("click", ()=>{
    console.log("modal");
    overlay.classList.toggle("hidden")
    modal.classList.toggle("hidden")
})
}

btnCloseModal.addEventListener("click", ()=>{
    overlay.classList.toggle("hidden")
    modal.classList.toggle("hidden")
})

overlay.addEventListener("click", ()=>{
    overlay.classList.toggle("hidden")
    modal.classList.toggle("hidden")
})

document.addEventListener("keydown", (event)=>{
    console.log(event.key);
    if (event.key=="Escape" && !modal.classList.contains("hidden")) {
        overlay.classList.toggle("hidden")
        modal.classList.toggle("hidden")
    }
})
 