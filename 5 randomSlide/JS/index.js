const leftButton = document.querySelector('.lft_btn');
const rightButton = document.querySelector('.rgt_btn');



let currIndex = 1;


function plusSlides(n) {
    slideControl(currIndex += n);
    console.log('fgj');
}


function currentSlide(n) {
    slideControl(currIndex = n);
}

function slideControl(n) {
    let i;
    let slides = document.querySelectorAll(".slide_IMG");
    if (n > slides.length) {
        currIndex = 1
    }
    if (n < 1) {
        currIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currIndex - 1].style.display = "block";
}

slideControl(currIndex);


leftButton.addEventListener('click', () => {
    plusSlides(-1)
})

rightButton.addEventListener('click', () => {
    plusSlides(1)

})

let timerId = setTimeout(function tick() {
    plusSlides(1)
    timerId = setTimeout(tick, 5000); 
  }, 1000); 
