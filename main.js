// ჰედერი 

document.querySelector('.mobile-navigation').addEventListener('click', function() {
    document.querySelector('.mobile-nav-content').classList.toggle('nav-active');
});

document.querySelector('.mobile-nav-close').addEventListener('click', function() {
    document.querySelector('.mobile-nav-content').classList.remove('nav-active');
});


//if header is scrolled down to 830px add class to header
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#header').style.position = 'fixed';
    } else {
        document.querySelector('#header').style.position = 'relative';
    }
});

// პირველი სექცია world news 




// მეორე სექცია  trending
let trendingSlider1 = document.querySelector(".trendingSlider")

let sectionCardsData = [
    {
        img: "./Images/nature1.jfif",
        txt1: '"Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: 'Shirline Dungey',
        txt3: 'Apple'
    },
    {
        img: "./Images/nature2.jfif",
        txt1: '"Dicat eripuit accumsan facilisi has cetero argumentum, vel at fugit definitionem integre abhorreant epicurei ferri aperiri pri."',
        txt2: 'Hector Mariano',
        txt3: 'Google'
    },
    {
        img: "./Images/nature3.jpeg",
        txt1: '"His dolorem habemus mandamus et, eius ponderum lorem molestiae ne, esse vulputate definitiones iracundia bonorum graecis convenire assum novum eu."',
        txt2: 'Tiontay Carroll',
        txt3: 'Facebook'
    },
    {
        img: "./Images/nature4.jpg",
        txt1: '"Quidam officiis similique indoctum efficiendi platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: 'Hector Mariano',
        txt3: 'Google'
    },
    {
        img: "./Images/nature5.jfif",
        txt1: '"Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit."',
        txt2: 'Shirline Dungey',
        txt3: 'Apple'
    },
    {
        img: "./Images/nature6.jfif",
        txt1: '"Dicat eripuit accumsan facilisi has cetero argumentum, vel at fugit definitionem integre abhorreant epicurei ferri aperiri pri."',
        txt2: 'Hector Mariano',
        txt3: 'Google'
    },
]

let trendingSlider = document.querySelector(".trendingSlider")
sectionCardsData.map((item) => {
    console.log(item)
    let box = document.createElement("div");
    box.classList.add('box')
    trendingSlider.appendChild(box)
    let img = document.createElement("img");
    img.setAttribute("src", item.img)
    box.appendChild(img);
    let box_box_p = document.createElement("div");
    box_box_p.classList.add('box_box_p')
    box.appendChild(box_box_p)
    let p1 = document.createElement("p");
    box.appendChild(p1)
    p1.innerHTML = item.txt1;
    
    let box_box = document.createElement("div");
    box_box.classList.add('box_box')
    box.appendChild(box_box)
    let h3 = document.createElement("h3");
    box_box.appendChild(h3)
    h3.innerHTML = item.txt2;
    let h4 = document.createElement("h4");
    box_box.appendChild(h4)
    h4.innerHTML = item.txt3;
    box.style.width = "360px";
    img.style.padding = "20px"
    img.style.width = "360px";
    img.style.height = "180px";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.alignItems = "center";
    let trendingBox = document.createElement("div");
    trendingBox.appendChild(box);
    trendingSlider1.appendChild(trendingBox)
})

let trendingLeft = document.querySelector(".trendingLeft")
let trendingRight = document.querySelector(".trendingRight")
let count = 0;
trendingSlider1.style.backgroundImage = `url(${sectionCardsData[count]})`

trendingLeft.addEventListener("click", function(){
    //div.style.backgroundImage = `url(${images[count-=1]})`
    count--
    console.log(count);
    if(count < 0){
        count = sectionCardsData.length-1
    }
    trendingSlider1.style.overflow = "hidden";
    trendingSlider.style.transform = 'translateX(0px)';
})

trendingRight.addEventListener("click", function(){
    console.log(count);
    count++
   if(count > sectionCardsData.length-1){
    count = 0
   }
//    trendingSlider1.style.overflow = "visible";
   trendingSlider.style.transform = 'translateX(-1100px)';
   trendingSlider1.style.overflow = "visible";
})

// მესამე სექცია happening now 




// ფუტერი 
  let send = document.querySelector('#send');
  let value = document.querySelector('#email');

  send.addEventListener('click', check);
  
  function check(){
    if(value.value.length<6){
        alert("your email is not long enough")
    }else if(!value.value.includes('@')){
        alert('Your email needs @ sign')
    }
    console.log(value.value);
  }