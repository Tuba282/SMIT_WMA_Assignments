var reviews = [
    {
        id: 1,
        nam: 'susan smith',
        job: 'web developer',
        img: './assets/per-img-2.png',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie.",
    },
    {
        id: 2,
        nam: 'anna johnson',
        job: 'web designer',
        img: './assets/per-img-3.png',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn jean shorts artisan narwhal.',
    },
    {
        id: 3,
        nam: 'peter jones',
        job: 'intern',
        img: './assets/per-img-4.png',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        nam: 'bill anderson',
        job: 'the boss',
        img: './assets/per-img-5.png',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table art shabby chic. ',
    }
];

var img = document.getElementById("person_img")
var nam = document.getElementById("name")
var job = document.getElementById("job")
var about = document.getElementById("about")

currentIndex = 0
function showPerson(person) {
    var item = reviews[person]
    img.src = item.img
    nam.textContent = item.nam
    job.textContent = item.job
    about.textContent = item.text
}

prev.addEventListener('click', function () {
    currentIndex++
    if (currentIndex > reviews.length - 1) {
        currentIndex = 0
    }
    showPerson(currentIndex)
})
next.addEventListener('click', function () {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1
    }
    showPerson(currentIndex)
})

var applyStyle = false
changeColor.addEventListener("click", function () {
    if (!applyStyle) {
        document.getElementById("body").style.background = 'black'
        document.getElementById("prev-i").style.color = 'black'
        document.getElementById("next-i").style.color = 'black'
        document.querySelector(".container").style.backgroundImage = ` linear-gradient(43deg, #17ff00 14%, #C850C0 41%, #f90000 67%, #FFCC70 88%)`
        document.querySelector(".card").style.background = ' rgba(245, 245, 245, 0.50)'
        document.querySelector(".subCard").style.background = ' rgb(245 245 245 / 0%)'
        document.querySelector(".quoteContainer").style.background = ' rgba(0, 0, 0, 0.50)'
        document.getElementById("path-1").style.fill = 'rgba(0, 0, 0, 0.50)'
        document.getElementById("path-2").style.fill = 'rgba(0, 0, 0, 0.50)'
        document.getElementById("path-3").style.fill = 'rgba(0, 0, 0, 0.50)'
        document.getElementById("path-4").style.fill = 'rgba(0, 0, 0, 0.50)'
        document.querySelector(".imgBack-p-1").style.cssText = 'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;background:white'
        document.querySelector(".imgBack-p-2").style.cssText = 'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;background:white'
        document.querySelector(".imgBack-p-3").style.cssText = 'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;background:white'
        document.querySelector(".imgBack-p-4").style.cssText = 'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;background:white'
        applyStyle = true;
    } else {
        document.getElementById("body").style.background = '';
        document.getElementById("prev-i").style.color = '';
        document.getElementById("next-i").style.color = '';
        document.querySelector(".container").style.backgroundImage = '';
        document.querySelector(".card").style.background = '';
        document.getElementById("path-1").style.fill = ''
        document.getElementById("path-2").style.fill = ''
        document.getElementById("path-3").style.fill = ''
        document.getElementById("path-4").style.fill = ''
        document.querySelector(".subCard").style.background = '';
        document.querySelector(".quoteContainer").style.background = '';
        document.querySelector(".imgBack-p-1").style.cssText = '';
        document.querySelector(".imgBack-p-2").style.cssText = '';
        document.querySelector(".imgBack-p-3").style.cssText = '';
        document.querySelector(".imgBack-p-4").style.cssText = '';
        applyStyle = false;
    }

})