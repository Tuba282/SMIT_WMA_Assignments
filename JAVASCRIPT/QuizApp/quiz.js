var rules = [
    'You have only 10 seconds for each question.',
    'You have to select an option before go to next question.',
    'There will be no going back after selecting an option.',
    'You can not select an option once the timer goes off.',
    'You can not exit the quiz while playing.'
]
var Rules = document.getElementById('rules')
rules.forEach(rule => {
    var li = document.createElement("li")
    var liText = document.createTextNode(rule)
    li.appendChild(liText)
    Rules.appendChild(li)

})

var questions = [

    {
        question: 'If a plane crashes on the border between the Pakistan and India\n where do they bury the survivors...?\n',
        options: ["Heaven", "Hell", "not buried", "Kashmir"],
        answer: 2 // Correct option: "not buried"
    },
    {
        question: 'Why did the web developer break up with the CSS file?',
        options: [
            "It was too controlling",
            "It didn't style itself properly",
            "It wasn't responsive",
            "It used inline styles"
        ],
        answer: 2 // Correct option: "It wasn't responsive"
    },
    {
        question: 'Why did the programmer quit his job?',
        options: [
            "He didn't like arrays",
            'He lost his “Ctrl”',
            'He forgot to debug his life',
            'He needed more “space”'
        ],
        answer: 1 // Correct option: He lost his “Ctrl”
    }, {
        question: "If Laiba's daughter is my daughter's mother what am i...?",
        options: [
            "Laiba's daughter",
            "Laiba's mother",
            "Laiba's grandmother",
            "Laiba",
        ],
        answer: 3 // Correct option: Laiba
    },
    {
        question: 'Why did the JavaScript function go broke?',
        options: [
            "It didn't return anything",
            "It had too many arguments",
            "It lost its scope",
            "It couldn't find its context",
        ],
        answer: 0 // Correct option: It didn't return anything
    },
    {
        question: 'Why was the computer feel cold ?',
        options: [
            "Its fan was too strong",
            'It left its Windows open',
            'It had a virus',
            'It was chilling in sleep mode'
        ],
        answer: 1 // Correct option: It left its Windows open
    },
    {
        question: 'Why do some cricket players never sweat ...\nBcause they have...\n?',
        options: ["Enemies", "Fans", "Family", "Friends"],
        answer: 1 // Correct option: Fans
    },
    {
        question: 'What can be broken, but is never held...?',
        options: [
            'A heart',
            'A bone',
            'A promise',
            'A record',
        ],
        answer: 2 // Correct option: A promise
    },
    {
        question: 'Most of the kids love to carry these keys. What are those keys...?',
        options: [
            'House keys',
            'Car keys',
            'School keys',
            'Cookies',
        ],
        answer: 3 // Correct option: Cookies
    },
    {
        question: 'Why was the CSS file always calm?',
        options: [
            'It had great margins for error',
            'It knew how to flex',
            'It always floated through life',
            'It was aligned with everything',
        ],
        answer: 1 // Correct option: It knew how to flex
    },
    {
        question: 'What did the <head> say to the <body> ?',
        options: [
            "Stop scrolling, you're making me dizzy!",
            "I'll handle the thinking; you do the heavy lifting.",
            "Let's link up!",
            "Don't forget to breathe!",
        ],
        answer: 1 // Correct option: I'll handle the thinking; you do the heavy lifting.
    },
    {
        question: 'What is always coming, but never arrives...?',
        options: [
            'Tomorrow',
            'Money that friend borrowed from me',
            'A train running late',
            'Your luck'
        ],
        answer: 0 // Correct option: Tomorrow
    }
];



const swiperWrapper = document.querySelector(".swiper-wrapper");
const currentScoreElement = document.getElementById("current-score");


let currentScore = 0;
let currentQuestionIndex = 0;

function initializeQuiz() {
    document.querySelector(".quote").style.display = 'none'
    document.querySelector(".quizDiv").style.display = 'block'
    
    document.getElementById("stratBtn").style.display = 'none'

    questions.forEach((q, index) => {
        const swiperSlide = document.createElement("div");
        swiperSlide.className = "swiper-slide";

        swiperSlide.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 18px;
        font-size: 15px;
        padding: 1em;
        gap:10px;
        font-weight: lighter;
        color: rgb(255, 255, 255);
        background: linear-gradient(rgba(37, 37, 37, 0.489), rgba(37, 37, 37, 0.489)),
        url(https://i.pinimg.com/736x/45/7b/40/457b40ee8a7a4a1612cb438ffb883efc.jpg)
        no-repeat center center / cover;
        border: 2px solid rgba(255, 255, 255, 0.72);
        width: 400px;
        z-index: 11;
         `;

        const questionElement = document.createElement("p");
        questionElement.textContent = `Q${index + 1}: ${q.question}`;
        swiperSlide.appendChild(questionElement);

        q.options.forEach((option, i) => {
            const button = document.createElement("button");
            button.className = "optionBtn";
            button.textContent = option;
            button.onclick = () => checkAnswer(index, i);
            swiperSlide.appendChild(button);
        });

        swiperWrapper.appendChild(swiperSlide);
    });

    // Initialize Swiper after appending slides
    new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });

}

// Function to Check Answer
function checkAnswer(questionIndex, selectedOption) {
    const correctAnswer = questions[questionIndex].answer;
    if (selectedOption === correctAnswer) {
        currentScore++;
        currentScoreElement.textContent = currentScore;
    }
    goToNextQuestion();
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.querySelector(".swiper").swiper.slideNext();
    } else {
        endQuiz();
    }
}

// End Quiz Function
function endQuiz() {
    document.querySelector(".quote").style.display = 'none'
    document.querySelector(".quizDiv").style.display = 'none'
    document.getElementById("endDiv").style.display = 'flex'
    document.getElementById("stratBtn").style.display = 'none'

    var endResult = document.querySelector('.endResult')
    if (currentScore > 10) {
        endResult.innerHTML = `
       <h2 class="text-center">Quiz Completed!</h2>
       <img src="./assets/stage-1.png" class="endImg" alt="">
       <span>Your Score: ${currentScore} / ${questions.length}</span>
       <p class="stratBtn " onclick="restartQuiz()">Restart</p>`;
    } else if (currentScore > 7) {
        endResult.innerHTML = `
       <h2 class="text-center">Quiz Completed!</h2>
       <img src="./assets/stage-2.png" class="endImg" alt="">
       <span>Your Score: ${currentScore} / ${questions.length}</span>
       <p class="stratBtn " onclick="restartQuiz()">Restart</p>`;
    } else if (currentScore > 5) {
        endResult.innerHTML = `
       <h2 class="text-center">Quiz Completed!</h2>
       <img src="./assets/stage-3.png" class="endImg" alt="">
       <span>Your Score: ${currentScore} / ${questions.length}</span>
       <p class="stratBtn " onclick="restartQuiz()">Restart</p>`;
    } else {

        endResult.innerHTML = `
        <h2 class="text-center">Quiz Completed!</h2>
        <img src="./assets/stage-4.png" class="endImg" alt="">
        <span>Your Score: ${currentScore} / ${questions.length}</span>
        <p class="stratBtn " onclick="restartQuiz()">Restart</p>
     `;
    }
}

// Restart Quiz
function restartQuiz() {
    location.reload(); 
}
