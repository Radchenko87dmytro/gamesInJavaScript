"use strict";

//Guess number game
const mainDiv = document.getElementById("mainDiv")

const condition = document.createElement("span")
const guessWordTitle = document.createElement("h1")
const guessWord = document.createElement("div")
const count = document.createElement("p")
const record = document.createElement("p")
const beginGuessTitle = document.createElement("div")
const beginGuess = document.createElement("input")

const again = document.createElement("button")
const check = document.createElement("button")

again.innerHTML = "Again!"
guessWordTitle.innerHTML="Guess number"
guessWord.innerHTML="Start guess ?"
condition.innerHTML="(Word between 1 and 20)"
beginGuessTitle.innerHTML="Begin guess..."
check.innerHTML="Check!"
count.innerHTML="Count: " + 20
record.innerHTML="Record: "


mainDiv.appendChild(again)
mainDiv.appendChild(condition)
mainDiv.appendChild(guessWordTitle)
guessWordTitle.appendChild(guessWord)
mainDiv.appendChild(count)
mainDiv.appendChild(record)
mainDiv.appendChild(beginGuessTitle)
beginGuessTitle.appendChild(beginGuess)
beginGuessTitle.appendChild(check)


let random = Math.floor(Math.random()*20)
let score = 20
check.addEventListener("click", ()=>{

      console.log(random);
      const inp=Number(document.querySelector("input").value)
      console.log(inp);
      
      if (score>1){
           if(!inp){
              guessWord.innerHTML=`You should write a number`
              
            }
            else if(random==inp){
              guessWord.innerHTML=`You win, correct number is ${inp}`
              document.querySelector("body").style.backgroundColor="green"
              record.textContent= "Record: " + (20-score)
              
            }else if(random>inp){
              guessWord.innerHTML="Your digit so little"
              score--
              count.textContent= "Count: "+ score
              console.log(score)
              //document.querySelector("input").value=""
            }else if(random<inp){
              guessWord.innerHTML="Your digit so big"
              score--
              count.textContent= "Count: "+ score
              console.log(score)
              //document.querySelector("input").value=""
            }
     } else{
      console.log(score)
      guessWord.innerHTML=`You lose, your count is ${0}`
      count.textContent=0
    }
  
})

  again.addEventListener("click", ()=>{
    score = 20
    guessWord.innerHTML="Start guess ?"
    count.innerHTML="Count: " + 20
    document.querySelector("input").value=""
    document.querySelector("body").style.backgroundColor="grey"
    random = Math.floor(Math.random()*20)
  })


again.style.cssText = `
  border-radius: 10px;
  padding: 10px;
  margin: 40px 0px 40px 80px;
  font-size: 30px;
  box-shadow: 6px 6px black;
`
condition.style.cssText=`
  font-size: 20px;
  position: absolute;
  top: 68px;
  right: 16px;
`
guessWordTitle.style.cssText=`
  font-size: 30px;
  margin: 0px 0px 40px 60px;
`
guessWord.style.cssText=`
  height: 150px;
  width: 150px;
  color: black;
  border: 5px solid green;
  border-radius: 10px;
  margin: 20px;
  background-color: white;
  text-align:center;
  padding-top: 20px
`
count.style.cssText=`
  position: absolute;
  bottom: 8px;
  right: 100px;
  font-size: 30px;
  margin-bottom: 10px;
`
record.style.cssText=`
  position: absolute;
  bottom: 8px;
  right: 100px;
  font-size: 30px;
  margin-bottom: 60px;
`
beginGuessTitle.style.cssText=`
  font-size: 30px;
  height: 150px;
  width: 150px;
  
  bottom: 60px;
  margin: 0px 0px 40px 60px;
`
beginGuess.style.cssText=`
  height: 80px;
  width: 150px;
  border: 5px solid blue;
  border-radius: 10px;
  margin: 20px;
  font-size: 40px;
  text-align: center;
`
check.style.cssText=`
  font-size: 40px;
  box-shadow: 6px 6px black;
  border-radius: 1rem;
  margin: 20px;
  padding: 10px
`



