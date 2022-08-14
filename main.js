// ჰედერი 





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