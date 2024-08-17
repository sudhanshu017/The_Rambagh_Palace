var item=document.querySelectorAll(".item")
var arrownext=document.querySelector(".arrow_next")
var arrowprev=document.querySelector(".arrow_prev")
count=0


arrownext.addEventListener('click', function () {
    if (count >= item.length - 1) return;
    count++;
    for (let img of item) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});


arrowprev.addEventListener('click', function () {
    if (count <= 0) return;
    count--;
    for (let img of item) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});


var itemimg=document.querySelectorAll(".item_img")
var nextbtn=document.querySelector(".nextbtn")
var prevbtn=document.querySelector(".prevbtn")
count=0


nextbtn.addEventListener('click', function () {
    if (count >= itemimg.length - 1) return;
    count++;
    for (let img of itemimg) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});


prevbtn.addEventListener('click', function () {
    if (count <= 0) return;
    count--;
    for (let img of itemimg) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});

var buttons=document.querySelectorAll(".accordian_btn")
var content=document.querySelectorAll(".content")
var chevronbtn = document.querySelectorAll('.fa-chevron-up')

buttons.forEach(
    function(button,index)
    {
        button.addEventListener('click', function()
    {
        buttons.forEach(
            function(btn,i)
            {
                if(i== index)
            {
                content[i].classList.toggle("show")
                chevronbtn[i].style.transform="rotate(180deg)"
            }
            else{
                content[i].classList.remove("show")
                chevronbtn[i].style.transform = "rotate(0deg)"
            }
            }
        )
    })
    }
)



function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert("Subscribed successfully!");
        
       
    }
}

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





