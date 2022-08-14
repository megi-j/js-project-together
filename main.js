// ჰედერი 





// პირველი სექცია world news 




// მეორე სექცია  trending





// მესამე სექცია happening now 
let img3Div = document.getElementById("img-3-div")
let img1DivImg = document.querySelector("#img-1-div img")
let img3DivImg = document.querySelector("#img-3-div img")
let img1txt1 = document.querySelector(".overlay-txt h2")
let img1txt2 = document.querySelector(".overlay-txt p")
let img3txt1 = document.querySelector(".title")
let img3txt2 = document.querySelector(".subtxt")
let timer = document.querySelector(".timer")
let toptxt = document.querySelector(".top-txt")

img3Div.addEventListener("mouseover", ()=>{
    img1DivImg.src = img3DivImg.src
    img1txt1.innerHTML = img3txt1.innerHTML
    img1txt2.innerHTML = img3txt2.innerHTML
    toptxt.innerHTML = "Elephant"
    timer.innerHTML = null
})

let img4Div = document.getElementById("img-4-div")
let img4DivImg = document.querySelector("#img-4-div img")
let img4txt1 = document.querySelector(".title")
let img4txt2 = document.querySelector(".subtxt")

img4Div.addEventListener("mouseover", ()=>{
    img1DivImg.src = img4DivImg.src
    img1txt1.innerHTML = img4txt1.innerHTML
    img1txt2.innerHTML = img4txt2.innerHTML
    toptxt.innerHTML = "Bird"
    timer.innerHTML = null
})

let img5Div = document.getElementById("img-5-div")
let img5DivImg = document.querySelector("#img-5-div img")
let img5txt1 = document.querySelector(".title")
let img5txt2 = document.querySelector(".subtxt")

img5Div.addEventListener("mouseover", ()=>{
    img1DivImg.src = img5DivImg.src
    img1txt1.innerHTML = img5txt1.innerHTML
    img1txt2.innerHTML = img5txt2.innerHTML
    toptxt.innerHTML = "Road"
    timer.innerHTML = null
})

let img2DivImg = document.querySelector("#img-2-div img")
let img2txt1 = document.querySelector(".overlay-txt h2")
let img2txt2 = document.querySelector(".overlay-txt p")

img3Div.addEventListener("click", ()=>{
    img2DivImg.src = img3DivImg.src
    img2txt1.innerHTML = img3txt1.innerHTML
    img2txt2.innerHTML = img3txt2.innerHTML
    toptxt.innerHTML = "Elephant"
    timer.innerHTML = null
})

img4Div.addEventListener("click", ()=>{
    img2DivImg.src = img4DivImg.src
    img2txt1.innerHTML = img4txt1.innerHTML
    img2txt2.innerHTML = img4txt2.innerHTML
    toptxt.innerHTML = "Bird"
    timer.innerHTML = null
})

img5Div.addEventListener("click", ()=>{
    img2DivImg.src = img5DivImg.src
    img2txt1.innerHTML = img5txt1.innerHTML
    img2txt2.innerHTML = img5txt2.innerHTML
    toptxt.innerHTML = "Road"
    timer.innerHTML = null
})



// ფუტერი 
    