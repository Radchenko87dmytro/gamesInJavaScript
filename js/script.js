"use strict";
// console.log(2+4)
// console.log("Hallo");
// console.log("World");

//alert("Hello");        //we need use semicolon ; before square brackets []
//[1, 2].forEach(alert);

// let myNumber = true
// let name = "world"

// console.log(typeof myNumber)
// console.log(1/"v")
// console.log(`Hello ${2*2}
// world
// Dima
// `)

// console.log(2**3)
// console.log(1/0)
// console.log("2">1)
// console.log(1>0)
// console.log("Hallo">1)   //false   "Hallo" it Nan
// console.log(undefined == 0)   //false
// console.log(undefined == null)  //true
// console.log(undefined === null)  //false

// 0, null, undefined, NaN, ""    - false
// some another znaczenie         - true

// let piterBMI = 72/1.88**2
// let denisBMI = 82/1.73**2
// console.log(Math.round(piterBMI))
// console.log(Math.round(denisBMI))
// console.log(piterBMI>denisBMI)

// const firstName = prompt("Write first name", "My name")
// console.log(firstName)
// const secondName = prompt("Write second name", "My name")
// console.log(secondName)

// const random = Math.random()*100
// const compatibility = Math.floor(random)
// console.log(compatibility)
//alert(`Result of compatibility ${firstName} and ${secondName} is ${compatibility}`)

// if((firstName==null||firstName=="")||(secondName==null||secondName=="")){
//     alert(`Name is not correct, write please correct name`)
// }
//  else if(compatibility<33){
//     alert(`Result of compatibility ${firstName} and ${secondName} is ${compatibility} you need finde person with another name`)
// } else if(compatibility>=33&&compatibility<66){
//     alert(`Result of compatibility ${firstName} and ${secondName} is ${compatibility} compatibility is good bub it could be better`)
// } else if(compatibility>=66){
//     alert(`Result of compatibility ${firstName} and ${secondName} is ${compatibility} you have perfectly compatibility`)
// } else{
//     alert(`Result is not correct, something is wrong`)
// }

// let a = 0,
//     b = "hello"
// console.log(a||b)  //return hello first true value
// console.log(a??b)  //return 0 first certain value

// let age = 35
// console.log(`I like drink ${age>=18 ? "Wine" : "juse"}`)

// let a
// let b

// function myFn(){
//     let b
//     a=true
//     b=5
//     console.log(b)
// }
// myFn()
// console.log(a)
// console.log(b)

// //confirm("How old are you?")
// function ask(question, yes, no){
//     if(confirm(question)){
//         yes()
//     }else no()
// }

// function showOk(){
//     alert("Thank you for confirming")
// }

// function showCancel(){
//     alert("You cancel confirming")
// }

//ask("Do you agree?", showOk, showCancel)

//ask("Do you agree?", ()=>alert("Thank you for confirming"), ()=>alert("You cancel confirming"))

// const result1 = 30,
//       result2 = 60,
//       result3 = 43

// let averKats = 0
// let averDucks = 0
// let averWinn = 0

// const averageKats = (result1, result2, result3)=>{
//     console.log(Math.floor((result1+result2+result3)/3))
//     averKats =  Math.floor((result1+result2+result3)/3)
//     return averKats
// }
// //averageKats(44, 23, 71)
// averageKats(85, 54, 41)
// console.log(averKats)

// const averageDucks = (result1, result2, result3)=>{
//     console.log(Math.floor((result1+result2+result3)/3))
//     averDucks =  Math.floor((result1+result2+result3)/3)
//     return averDucks
// }
// //averageDucks(65, 54, 49)
// averageDucks(23, 34, 27)
// console.log(averDucks)

// const Winner=(averKats, averDucks)=>{
//     if(averKats>=averDucks*2){
//         console.log("Kats is winner")
//     }else if (averDucks>=averKats*2){
//         console.log("Ducks is winner")
//     } else{
//         console.log("Draw between the commands")
//     }
// }
// Winner(averKats, averDucks)
//Winner(500, 11)

// function calcA(){
//     return 2023-this.birthYear
// }

// const userFirst = {
//     name: "John",
//     age: 30,
//     birthYear: 2000,
//     placeOfBirth: {
//         country: "USA",
//         city: "Dalas"
//     },
//     // calcAge: function(){
//     //     return 2023-user.birthYear
//     // },
//     calcAge(){
//         console.log(this)
//         return 2023-this.birthYear
//     },
//     //calcA: calcA
//     calcA
// }

// const userSecond = {
//     name: "John",
//     age: 30,
//     birthYear: 2005,
//     placeOfBirth: {
//         country: "USA",
//         city: "Dalas"
//     },
//     // calcAge: function(){
//     //     return 2023-user.birthYear
//     // },
//     calcAge(){
//         console.log(this)
//         return 2023-this.birthYear
//     },
//     //calcA: calcA
//     calcA
// }

// userFirst.placeOfBirth.country="Poland"
// userFirst.placeOfBirth["dateOfBirth"]=1987
// userFirst["new"]=12
// delete userFirst["placeOfBirth"].city

// //console.log(user)
// console.log(userFirst.calcAge())
// console.log(userFirst.calcA())
// console.log(userSecond.calcAge())

// function calcBMI(){
//     const BMI = Math.floor(this.weight/this.height**2)
//     return BMI
// }

// const piterInf = {
//     name: "Piter",
//     weight: 72,
//     height: 1.88,
//     calcBMI,
// }

// const denisInf = {
//     name: "Denis",
//     weight: 82,
//     height: 1.73,
//     calcBMI,
// }

// const piterBMI = piterInf.calcBMI()
// const denisBMI = denisInf.calcBMI()
// console.log(piterBMI)
// console.log(denisBMI)

// if (piterBMI>denisBMI){
//     console.log("Piter's BMI is bigger than Deni's")
// }else if(piterBMI<denisBMI){
//     console.log("Deni's BMI is bigger than Piter's")
// } else {
//     console.log("Deni's and Piter's BMI is same")
//}




//const userArr =["John", 30, 20, 2000-1992,]
// console.log(userArr.at(-1))       //last element of array

// userArr.push("male")//add element in the end of array
// console.log(userArr)

// userArr.unshift(10) //add element in the beginning of array
// console.log(userArr)
// console.log(userArr.unshift(10))

// userArr.pop()      //delete element from the end of array
// console.log(userArr)
// console.log(userArr.pop())

// userArr.shift() //delete element from the beginning of array
// console.log(userArr)
// console.log(userArr.shift())

//delete userArr[1]
//console.log(userArr)

//const userArr =["John", 30, 20, 2000-1992,]
//userArr.splice(1, 2) //index from beginning dell, quantiti del el
//console.log(userArr)

//userArr.splice(1, 2, 35, "twentyfive") //index from beginning change, quantiti changes el, vale1, value2
//console.log(userArr)

//userArr.splice(0, 0, 45, "fourthyfive") //(6) [45, 'fourthyfive', 'John', 30, 20, 8]
//console.log(userArr)

// const detaFromUserArray = userArr.splice(1, 2)
// console.log(userArr)
// console.log(detaFromUserArray)

// console.log(userArr.includes(30))
// console.log(userArr.indexOf(20))
// console.log(userArr.indexOf(3))  //-1

// const arr =["John", 30, 20, 2000-1992,]

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])

// }
// console.log(typeof arr[i])

// const userObj = {
//         name: "John",
//         age: 30,
//         birthYear: 2005,
//         placeOfBirth: {
//             country: "USA",
//             city: "Dalas"
//         },
//     }

// const userObj2 = JSON.parse(JSON.stringify(userObj))
// userObj.placeOfBirth.city = "New York"

// console.log(userObj)
// console.log(userObj2)



//fibonacci
//0, 1 , 1, 2, 3, 5, 8, 13, 21, 34,

// const fibonacci = (n)=>{

//     let output = []

//     if (n == 1) {
//         output = [0]
//     } else if(n == 2) {
//         output = [0, 1]
//     } else {
//         output = [0, 1]
//         for(let i=2; i<=n; i++) {
//         output.push(output[output.length-2] + output[output.length-1])
//         }
//     }

//     return output
// }

// const parametr = 13
// console.log(fibonacci(parametr))



//let header = document.querySelector(".nav_list")
//console.dir(document.querySelector("ul"));
//console.log(document.querySelector("li")); 
//console.log(document.querySelectorAll(".nav_item"));

//console.log(document.documentElement);
//console.dir(document);

//console.log(header.firstChild);   
//firstChild, lastChild, nextSibling, previousSibling, parentNode

//console.log(header.childNodes);



// const navItems = document.querySelectorAll("li")
// console.log(navItems);



// let arr = [1, 2, 3, 4, 5]
// let arr2 = document.querySelectorAll("li")
//console.log(arr2);

// for(let i of arr){
//   console.log(i);
// }

// const userObj = {
//           name: "John",
//           age: 30,
//           birthYear: 2005,
//           }

// for (let key in userObj){
//   console.log(userObj[key]);
// }

// for (let key in arr){
//   console.log(arr[key]);
// }

// for (let val of arr2){
//   console.log(val);
// }



// let elementH1 = document.querySelector("h1")
// console.log(elementH1);
// let oldElement = elementH1.innerHTML
// console.log(oldElement);
//elementH1.innerHTML=`<p>${oldElement}</p><p>Another text</p>`

//elementH1.textContent=`<p>${oldElement}</p><p>Another text</p>`

// elementH1.outerHTML=`<p>Another text</p>`

// console.log(elementH1.firstChild.data="new hello"); 


// let elementH1 = document.querySelector("h1")
//const newH2 = document.createElement("h2")
// const someTextNode = document.createTextNode("Some text node")

//newH2.innerHTML="new h2"
// elementH1.before(newH2)
// elementH1.after(newH2)
// elementH1.prepend(newH2)
// elementH1.append(newH2, "Second parametr ")
// elementH1.append(someTextNode)

                            //beforebegin
//elementH1.insertAdjacentHTML("afterbegin", "<p>Another text</p>") 
                            //beforeend
                            //afterend


          
// let ul = document.querySelector("ul")

// ul.prepend(elementH1)
//let ulClone = ul.cloneNode()
// let ulClone = ul.cloneNode(true)

// elementH1.prepend(ulClone)
// elementH1.remove()



//console.log(elementH1.style);
//  elementH1.style.marginBottom = "100px"
// elementH1.style.fontSize = "35px"

// elementH1.style.cssText = `
//   color: red;
//   margin-bottom: 100px;
//`

//elementH1.classList.add("newClass")

// console.log(elementH1.className);
 //elementH1.className = "newClass"


// let styleOfElementH1 = getComputedStyle(elementH1)
// console.log(parseInt(styleOfElementH1.marginBottom));

// let li = document.querySelectorAll("li")

// for( let value of li) {
//   value.classList.add("newClass")
// }



// let img = document.querySelector("img")
// //img.src="https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041047_640.jpg"

// let buttonPicture = document.createElement("button")
// let buttonParagraf = document.createElement("button")
// let paragrafPicture = document.createElement("p")

// paragrafPicture.setAttribute("class", "paragrafClass")
//paragrafPicture.style.backgroundImage="url('https://cdn.pixabay.com/photo/2023/05/31/14/20/mountains-8031511_640.jpg')"

// buttonPicture.innerHTML="Change picture"
// buttonParagraf.innerHTML="Change background of paragraf"
// paragrafPicture.innerHTML="new paragraf"//temporary

// img.after(buttonPicture)
// buttonPicture.after(paragrafPicture)
// paragrafPicture.after(buttonParagraf)

// paragrafPicture.style.height="400px"
// paragrafPicture.style.width="600px"
//paragrafPicture.style.backgroundImage="url('https://cdn.pixabay.com/photo/2023/05/31/14/20/mountains-8031511_640.jpg')"

// buttonPicture.addEventListener("click", changePicture)
// function changePicture(){
//   //img.classList.toggle("content1")
  
//   //img.setAttribute("src", "https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041047_640.jpg")
//   img.src="https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041047_640.jpg"
// }

// buttonParagraf.addEventListener("click", ()=>{
//   paragrafPicture.classList.toggle("paragrafClass")
//   //paragrafPicture.style.backgroundImage="url('https://cdn.pixabay.com/photo/2023/05/31/14/20/mountains-8031511_640.jpg')"
// })



// const elem = document.querySelector(".box_1")
// const audio = new Audio("Mountain Audio - Menu Click.mp3")
// const elems = document.querySelectorAll(".boxes_box")

// for(let value of elems){
//   value.addEventListener("click", ()=>{
//     value.style.backgroundColor="red"
//     value.nextElementSibling.after(elem)
//     value.classList.add("newStyle")
//     audio.play()
//   })
// }

// const elem = document.querySelector(".box_1")
// elem.addEventListener("mouseenter", ()=>{
//   elem.classList.add("newStyle")

// })






















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
guessWord.innerHTML="?"
condition.innerHTML="(Word between 1 and 20)"
beginGuessTitle.innerHTML="Begin guess..."
check.innerHTML="Check!"
count.innerHTML="Count: " 
record.innerHTML="Record: "

// button1.addEventListener("click", setGreen);
// function setGreen() {
//   paragraf1.style.color = "green";
// }

mainDiv.appendChild(again)
mainDiv.appendChild(condition)
mainDiv.appendChild(guessWordTitle)
guessWordTitle.appendChild(guessWord)
mainDiv.appendChild(count)
mainDiv.appendChild(record)
mainDiv.appendChild(beginGuessTitle)
beginGuessTitle.appendChild(beginGuess)
beginGuessTitle.appendChild(check)


// again.addEventListener("click", ()=>{   
//   let random = Math.floor(Math.random()*20)
// })

let random = Math.floor(Math.random()*20)
let score = 20
 check.addEventListener("click", ()=>{

//   again.addEventListener("click", ()=>{
//      random = Math.floor(Math.random()*20)
//   })



      console.log(random);
      const inp=Number(document.querySelector("input").value)
      console.log(inp);

 // for(let i = 1; i<21; i++){

      
      if (score>0){
           if(!inp){
              guessWord.innerHTML=`You should write a number`
              
            }
            else if(random==inp){
              guessWord.innerHTML=`You win, correct number is ${inp}`
              document.querySelector("body").style.backgroundColor="green"
              //count.innerHTML=i
              
            }else if(random>inp){
              guessWord.innerHTML="Your digit so little"
              score--
              count.textContent=score
              console.log(score)
            }else if(random<inp){
              guessWord.innerHTML="Your digit so big"
              score--
              count.textContent=score
              console.log(score)
            }
     } else{
      console.log(score)
      guessWord.innerHTML=`You lose, your count is ${score}`
    }
      

    //}
  
})





again.style.cssText = `
  border-radius: 10px;
  padding: 10px;
  margin: 30px 0px 50px 10px;
  font-size: 30px;
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
  height: 150px;
  width: 150px;
  display: block;
  bottom: 60px;
  left: 16px;
`
beginGuess.style.cssText=`
  height: 100px;
  width: 100px;
  border: 5px solid blue;
  border-radius: 10px;
  margin: 20px;
  font-size: 40px;
`
check.style.cssText=`
  font-size: 40px;
  border: 5px solid blue;
  border-radius: 10px;
  margin: 20px;
  padding: 10px
`