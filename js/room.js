var section1=document.querySelector(".section1")
document.addEventListener(
    'scroll',
    function(e)
    {
       
        if(window.scrollY>865){
            section1.classList.add('stick')
        }
        
    }
)

var room1=document.querySelectorAll(".room1")
var room_next_button=document.querySelector(".room_next_button")
var room_prev_button=document.querySelector(".room_prev_button")
count=0


room_next_button.addEventListener('click', function () {
    if (count >= room1.length - 2) return;
    count++;
    for (let img of room1) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
   
});


room_prev_button.addEventListener('click', function () {
    if (count <= 0) return;
    count--;
    for (let img of room1) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});


var offer1=document.querySelectorAll(".offer1")
var offer_next_button=document.querySelector(".offer_next_button")
var offer_prev_button=document.querySelector(".offer_prev_button")
count=0


offer_next_button.addEventListener('click', function () {
    if (count >= offer1.length -2) return;
    count++;
    for (let img of offer1) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
   
});


offer_prev_button.addEventListener('click', function () {
    if (count <= 0) return;
    count--;
    for (let img of offer1) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});