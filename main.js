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