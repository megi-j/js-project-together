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
    