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
        question: "What is Andy Dwyer's best known band name?",
        answers: ["Mouse Rat", "Fourskin", "Scarecrow Boat", "Just the Tip"],
        correctAnswer: "Mouse Rat",
        answerImage: `<img id="answer-image" src="./assets/images/mouse-rat.jpg">`
    },
    {
        question: "Which character did not understand the town's obsession with Lil-Sebastian?",
        answers: ["Ron Swanson", "Donna Meagle", "Ben Wyatt", "April Ludgate"],
        correctAnswer: "Ben Wyatt",
        answerImage: `<img id="answer-image" src="./assets/images/ben-lil-sebastian.gif">`
    },
    {
        question: "Who is Donna Meagle's celebrity cousin?",
        answers: ["Usher", "Ginuwine", "Ray-J", "Miguel"],
        correctAnswer: "Ginuwine",
        answerImage: `<img id="answer-image" src="./assets/images/donna-ginuwine.gif">`
    },
    {
        question: "What has Leslie given Ben as an anniversary gift?",
        answers: ["A replica of the Iron Throne", "The patent for his board game, Cones of Dunshire", "A scrapbook of their anniversary plans", "Tickets to a Star Wars convention"],
        correctAnswer: "A replica of the Iron Throne",
        answerImage: `<img id="answer-image" src="./assets/images/ben-iron-throne.jpg">`
    },
    {
        question: "During a cabin trip, Andy recovered a positive pregnancy test, who's was it?",
        answers: ["Mona-Lisa Saperstein", "Ann Perkins", "April Ludgate", "Diane Lewis"],
        correctAnswer: "Diane Lewis",
        answerImage: `<img id="answer-image" src="./assets/images/diane-ron-wedding.gif">`
    },
    {
        question: "While Ben is unemployeed, he dabbles in clamation. What is the name of Ben's clamation project?",
        answers: ["A requiem for a Tuesday", "The Cones of Dunshire", "A sleepless night", "Legends of garth"],
        correctAnswer: "A requiem for a Tuesday",
        answerImage: `<img id="answer-image" src="./assets/images/a-requiem-for-a-tuesday.gif">`
    },
    {
        question: "A food tasting left Ben, Chris and Ron sick the next day. What was the dish?",
        answers: ["Macaroni and Cheese", "Cheesecake", "Lobster Bisque", "Calzone"],
        correctAnswer: "Calzone",
        answerImage: `<img id="answer-image" src="./assets/images/calzones-sick.png">`
    },
    {
        question: "Who shot Ron in the head during a hunting trip?",
        answers: ["Leslie Knope", "Tom Haverford", "Donna Meagle", "Larry Geirgich"],
        correctAnswer: "Tom Haverford",
        answerImage: `<img id="answer-image" src="./assets/images/ron-shot.jpg">`
    },
    {
        question: "What does Donna love the most?",
        answers: ["Her dog", "Her Mercedes", "Tweeting", "A spa day"],
        correctAnswer: "Her Mercedes",
        answerImage: `<img id="answer-image" src="./assets/images/donna-mercedes.gif">`
    },
    {
        question: "Who does April openly dislike the most?",
        answers: ["Ann Perkins", "Tom Haverford", "Jeremy Jamm", "Larry Geirgich"],
        correctAnswer: "Ann Perkins",
        answerImage: `<img id="answer-image" src="./assets/images/april-and-ann.gif">`
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
    //there are no more questions, then end game and show results
    if (i >= gameArray.length) {
        clearInterval()
        document.querySelector('#question-box').innerHTML = `<h1>Game over! Here's your score:</h1>`
        document.querySelector('#answer-box').innerHTML = `<h1>Correct Answers: ${correctAnswersCount} / ${gameArray.length} <br><br> Wrong Answers: ${wrongAnswersCount} / ${gameArray.length} <br><br> Missed Answers: ${unansweredCount} / ${gameArray.length}</h1>`
        document.querySelector('#timer-box').innerHTML = `<h4 id="play-again">Play Again</h4>`
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
            document.querySelector('#question-box').innerHTML = '<h1> Too slow. The correct answer is ' + correctAnswer + '.'
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h4 class="next-button">Next Question</h4>'
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
            document.querySelector('#next-question').innerHTML = '<h4 class="next-button">Next Question</h4>'
            document.querySelector('#timer-box').innerHTML = ``
        }
        else if (event.target.innerHTML !== correctAnswer && event.target.className === 'answer') {
            wrongAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1> Wrong! The correct answer is ' + correctAnswer + '.'
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h4 class="next-button">Next Question</h4>'
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
        correctAnswersCount = 0
        wrongAnswersCount = 0
        unansweredCount = 0
        getQuestion()
    }
})

