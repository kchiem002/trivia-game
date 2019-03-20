let themeSong = document.querySelector('#theme-song')
let gameArray = [
    {
        question: "Leslie Knope was born in which city?",
        answers: ["Pawnee", "Indianapolis", "Bloomington", "Eagleton"],
        correctAnswer: "Eagleton",
        answerImage: `<img id="answer-image" src="./assets/images/leslie-eagleton.jpg">`
    },
    {
        question: "Where is Tom Haverford from?",
        answers: ["South Carolina", "Connecticutt", "Libya", "India"],
        correctAnswer: "South Carolina",
        answerImage: `<img id="answer-image" src="./assets/images/tom-origin.jpg">`
    },
    {
        question: "What is the name of Ron's saxophone playing alter-ego?",
        answers: ["Ron Dunn", "Ringo Starr", "Duke Silver", "Harry Mulligan"],
        correctAnswer: "Duke Silver",
        answerImage: `<img id="answer-image" src="./assets/images/ron-alter-ego.jpg">`
    },
    {
        question: "What is Andy Dwyer's band name?",
        answers: ["Mouse Rat", "Fourskin", "Scarecrow Boat", "Just the Tip"],
        correctAnswer: "Mouse Rat",
        answerImage: `<img id="answer-image" src="./assets/images/mouse-rat.jpg">`    
    },
]
let i = 0
let correctAnswersCount = 0
let wrongAnswersCount = 0
let unansweredCount = 0
let timer = 16
let myTimer = ''
let question = gameArray[i].question
let answers = gameArray[i].answers
let correctAnswer = gameArray[i].correctAnswer
let answerImage = gameArray[i].answerImage


//function to start timer
const displayTimer = _ => {
    myTimer = setInterval(_ => {
        timer--
        document.querySelector('#timer-box').innerHTML = '<h3 id="timer">Time Remaining: ' + timer + ' seconds'

        if (timer <= 0) {
            unansweredCount++
            document.querySelector('#question-box').innerHTML = '<h1> Too slow. The correct answer is ' + correctAnswer
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 class="next-button">Next Question</h3>'
        }
    }, 1000)
}

//function to display question and answer choices
const startGame = _ => {
    themeSong.play()
    displayTimer()
    //display question and answer choices
    document.querySelector('#question-box').innerHTML = '<h1 id="question">' + question + '</h1>'
    document.querySelector('#answer-box').innerHTML = '<div><h2 class="answer">' + answers[0] + '</div><div><h2 class="answer">' + answers[1] + '</div><div><h2 class="answer">' + answers[2] + '</div>' + '</div><div><h2 class="answer">' + answers[3] + '</div>'
    checkUserGuess()
}


//function to check whether user guess is correct/incorrect
const checkUserGuess = _ => {
    document.addEventListener('click', event => {
        if (event.target.innerHTML === correctAnswer) {
            correctAnswersCount++
            i++
            document.querySelector('#question-box').innerHTML = '<h1>That is Correct!</h1>'
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 class="next-button">Next Question</h3>'
            clearInterval(myTimer)

        }
        else if (event.target.innerHTML !== correctAnswer && event.target.className === 'answer') {
            i++
            wrongAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1> Wrong! The correct answer is ' + correctAnswer
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 class="next-button">Next Question</h3>'
            clearInterval(myTimer)
        }
    })
}

document.addEventListener('click', event => {
    if (event.target.className === 'next-button') {
        startGame()
        console.log("next question")
        document.querySelector('#next-question').innerHTML = ""
        clearInterval(timer)
    }
})


//I don't know why my clearInterval function is not working so I couldn't stop the timer from counting down
//