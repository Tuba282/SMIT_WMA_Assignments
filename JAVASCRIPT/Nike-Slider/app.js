// add To cart functionality

var addToCart = document.getElementById("addToCart")

addToCart.addEventListener('click', function () {
    var num = document.getElementById("num")
    var convert_num = parseInt(num.innerText)
    var add_1 = parseInt(convert_num + 1)
    num.innerText = add_1
    console.log(num.innerText);
})

//slide images


var images = [
    './assets/showImg-1.png',
    './assets/showImg-2.png',
    './assets/showImg-3.png',
    './assets/showImg-4.png'
];
var currentIndex = 0;

var nextArrow = document.getElementById("nextArrow");
var prevArrow = document.getElementById("prevArrow");

nextArrow.addEventListener('click', function () {
    var slideImg = document.getElementById("slideImg");

    currentIndex++;
    if (currentIndex === images.length - 1) {
        nextArrow.style.display = 'none';
    } else {
        nextArrow.style.display = 'flex';
    }
    prevArrow.style.display = 'flex';
    slideImg.src = images[currentIndex];

    highlightCurrentSlide();
});

prevArrow.addEventListener('click', function () {
    var slideImg = document.getElementById("slideImg");

    currentIndex--;
    if (currentIndex === 0) {
        prevArrow.style.display = 'none';
    } else {
        prevArrow.style.display = 'flex';
    }
    nextArrow.style.display = 'flex';
    slideImg.src = images[currentIndex];

    highlightCurrentSlide();
});

function highlightCurrentSlide() {

    document.getElementById("flexImg-1").style.border = ' 1px solid rgba(128, 128, 128, 0.221)';
    document.getElementById("flexImg-2").style.border = ' 1px solid rgba(128, 128, 128, 0.221)';
    document.getElementById("flexImg-3").style.border = ' 1px solid rgba(128, 128, 128, 0.221)';
    document.getElementById("flexImg-4").style.border = ' 1px solid rgba(128, 128, 128, 0.221)';


    if (currentIndex === 0) {
        document.getElementById("flexImg-1").style.border = '3px solid rgba(128, 128, 128, 0.221)';
    } else if (currentIndex === 1) {
        document.getElementById("flexImg-2").style.border = '3px solid rgba(128, 128, 128, 0.221)';
    } else if (currentIndex === 2) {
        document.getElementById("flexImg-3").style.border = '3px solid rgba(128, 128, 128, 0.221)';
    } else if (currentIndex === 3) {
        document.getElementById("flexImg-4").style.border = '3px solid rgba(128, 128, 128, 0.221)';
    }
}



highlightCurrentSlide();

function flexImg_1() {
    currentIndex = 0;
    document.getElementById("slideImg").src = images[currentIndex];
    highlightCurrentSlide();
}
function flexImg_2() {
    currentIndex = 1;
    document.getElementById("slideImg").src = images[currentIndex];
    highlightCurrentSlide();
}
function flexImg_3() {
    currentIndex = 2;
    document.getElementById("slideImg").src = images[currentIndex];
    highlightCurrentSlide();
}
function flexImg_4() {
    currentIndex = 3;
    document.getElementById("slideImg").src = images[currentIndex];
    highlightCurrentSlide();
}