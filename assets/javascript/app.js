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

//function to get question, function call is in HTML
const getQuestion = _ => {
    if (i >= gameArray.length) {
        document.querySelector('#question-box').innerHTML = `<h1>Game over! Here's your score:</h1>`
        document.querySelector('#answer-box').innerHTML = `<h1>Correct Answers: ${correctAnswersCount} / ${gameArray.length} <br><br> Wrong Answers: ${wrongAnswersCount} / ${gameArray.length} <br><br> Missed Answers: ${unansweredCount} / ${gameArray.length}</h1>`
        document.querySelector('#timer-box').innerHTML = `<h3 id="play-again">Play Again</h3>`
    }
    else {
        timer = 16
        themeSong.play()
        displayTimer()  
        question = gameArray[i].question
        answers = gameArray[i].answers
        correctAnswer = gameArray[i].correctAnswer
        answerImage = gameArray[i].answerImage
        document.querySelector('#question-box').innerHTML = '<h1 id="question">' + question + '</h1>'
        document.querySelector('#answer-box').innerHTML = '<div><h2 class="answer">' + answers[0] + '</div><div><h2 class="answer">' + answers[1] + '</div><div><h2 class="answer">' + answers[2] + '</div>' + '</div><div><h2 class="answer">' + answers[3] + '</div>'
    }
}

//function to start timer
const displayTimer = _ => {
    myTimer = setInterval(_ => {
        console.log(timer)
        timer--
        document.querySelector('#timer-box').innerHTML = '<h3 id="timer">Time Remaining: ' + timer + ' seconds'

        if (timer <= 0) {
            unansweredCount++
            i++
            document.querySelector('#question-box').innerHTML = '<h1> Too slow. The correct answer is ' + correctAnswer
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 class="next-button">Next Question</h3>'
            document.querySelector('#timer-box').innerHTML = ``
            clearInterval(myTimer)
        }
    }, 1000)
}

//function to check whether user guess is correct/incorrect
const checkUserGuess = _ => {
        if (event.target.innerHTML === correctAnswer) {
            correctAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1>That is Correct!</h1>'
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 class="next-button">Next Question</h3>'
            document.querySelector('#timer-box').innerHTML = ``
        }
        else if (event.target.innerHTML !== correctAnswer && event.target.className === 'answer') {
            wrongAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1> Wrong! The correct answer is ' + correctAnswer
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 class="next-button">Next Question</h3>'
            document.querySelector('#timer-box').innerHTML = ``
        }
        i++
        clearInterval(myTimer)
}

//event listeners for next question button, user answer, and play again
document.addEventListener('click', event => {
    if (event.target.className === 'next-button') {
        getQuestion()
        document.querySelector('#next-question').innerHTML = ""
    }
    else if (event.target.className === 'answer') {
        checkUserGuess()
    }
    else if (event.target.id === 'play-again') {
        i = 0
        getQuestion()
    }
})

