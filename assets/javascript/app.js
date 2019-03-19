let correctAnswersCount
let wrongAnswersCount
let unansweredCount
let timer
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
let randQ = Math.floor(Math.random() * 4)

const startGame = _ => {
    correctAnswersCount = 0
    wrongAnswersCount = 0
    unansweredCount = 0
    timer = 21
    question = gameArray[randQ].question
    answers = gameArray[randQ].answers
    correctAnswer = gameArray[randQ].correctAnswer
    answerImage = gameArray[randQ].answerImage

    themeSong.play()
    setInterval(_ => {
        timer--
        document.querySelector('#timer-box').innerHTML = '<h3 id="timer">Time Remaining: ' + timer + ' seconds'

        if (timer <= 0) {
            unansweredCount++
            console.log(unansweredCount)
            document.querySelector('#question-box').innerHTML = '<h1> Too slow. The correct answer is ' + correctAnswer
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 id="next-button">Next Question</h3>'
        }
    }, 1000)

    document.querySelector('#question-box').innerHTML = '<h1 id="question">' + question + '</h1>'
    document.querySelector('#answer-box').innerHTML = '<div><h2 class="answer">' + answers[0] + '</div><div><h2 class="answer">' + answers[1] + '</div><div><h2 class="answer">' + answers[2] + '</div>' + '</div><div><h2 class="answer">' + answers[3] + '</div>'
    
    //event listener for answer selection
    document.addEventListener('click', event => {
        answerImage = gameArray[randQ].answerImage
        correctAnswer = gameArray[randQ].correctAnswer
        if (event.target.innerHTML === correctAnswer) {
            console.log(correctAnswersCount)
            correctAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1>That is Correct!</h1>'
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 id="next-button">Next Question</h3>'
            // clearInterval()
        }
        else if (event.target.innerHTML !== correctAnswer && event.target.className === 'answer') {
            console.log("wrong")
            wrongAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1> Wrong! The correct answer is ' + correctAnswer
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 id="next-button">Next Question</h3>'
            // clearInterval()
        }
    })
}


const startGame2 = _ => {
    correctAnswersCount = 0
    wrongAnswersCount = 0
    unansweredCount = 0
    timer = 21
    question = gameArray[randQ].question
    answers = gameArray[randQ].answers
    correctAnswer = gameArray[randQ].correctAnswer

    // setInterval(_ => {
    //     timer--
    //     document.querySelector('#timer-box').innerHTML = '<h3 id="timer">Time Remaining: ' + timer + ' seconds'
    // }, 1000)

    document.querySelector('#question-box').innerHTML = '<h1 id="question">' + question + '</h1>'
    document.querySelector('#answer-box').innerHTML = '<div><h2 class="answer">' + answers[0] + '</div><div><h2 class="answer">' + answers[1] + '</div><div><h2 class="answer">' + answers[2] + '</div>' + '</div><div><h2 class="answer">' + answers[3] + '</div>'
    
    //event listener for answer selection
    document.addEventListener('click', event => {
        answerImage = gameArray[randQ].answerImage
        correctAnswer = gameArray[randQ].correctAnswer
        if (event.target.innerHTML === correctAnswer) {
            console.log(correctAnswersCount)
            correctAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1>That is Correct!</h1>'
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 id="next-button">Next Question</h3>'
            // clearInterval()
        }
        else if (event.target.innerHTML !== correctAnswer && event.target.className === 'answer') {
            console.log("wrong")
            wrongAnswersCount++
            document.querySelector('#question-box').innerHTML = '<h1> Wrong! The correct answer is ' + correctAnswer
            document.querySelector('#answer-box').innerHTML = answerImage
            document.querySelector('#next-question').innerHTML = '<h3 id="next-button">Next Question</h3>'
            // clearInterval()
        }
        else if (timer <= 0) {
            unansweredCount++
        }
    })
    document.querySelector('#next-question').addEventListener('click', startGame2())

}




// const checkUserGuess = () => {
//     console.log("checkUserGuess")
// }

// const startGame = _ => {
//     // themeSong.play()
//     console.log("start game")
//     let triviaQuestion = document.createElement('h1')
//     document.querySelector('#theme-photo').innerHTML = ""
//     triviaQuestion.innerHTML = gameArray[0].question
//     document.querySelector('question-box').append(triviaQuestion)

//     for (let i = 0; i < gameArray[0].answers.length; i++) {
//         let guessButton = document.createElement('h2')
//         guessButton.innerHTML = gameArray[0].answers[i]
//         guessButton.onclick = checkUserGuess
//         document.querySelector('#start-box').innerHTML = ""
//         document.querySelector('#answer-box').append(guessButton)
//     }
// }
// const startGame = _ => {
//     let count = 20
//     //play theme song
//     themeSong.play()
//     //timer
//     setInterval(_=> {
//         count--
//         console.log(count)
//         document.querySelector('#timer-box').innerHTML = `<h3>Time Remaining: ${count} seconds</h3>`
//     }, 1000)
//     //question and answer content
//     document.querySelector('#start-button').style.display = 'none'
//     document.querySelector('#question-box').innerHTML = `<h1>${gameArray[0].question}</h1>`    
//     document.querySelector('#answer-1').innerHTML = `<h2>${gameArray[0].answer1}</h2>`
//     document.querySelector('#answer-2').innerHTML = `<h2>${gameArray[0].answer2}</h2>`
//     document.querySelector('#answer-3').innerHTML = `<h2>${gameArray[0].answer3}</h2>`
//     //answer selection function calls
//         //correct answer
//     document.querySelector('#answer-3').addEventListener('click', function () {
//         correctAnswersCount++
//         document.querySelector('#question-box').innerHTML = `<h1>Correct!</h1>`
//         document.querySelector('#answer-box').innerHTML = `<img id="answer-image" src="./assets/images/correct-answer-1.jpg">`
//         document.querySelector('#timer-box').style.display = 'none'
//         document.querySelector('#next-question').innerHTML = `<h4>Next Question</h4>`
//     })
//         //wrong answers
//     document.querySelector('#answer-1').addEventListener('click', function() {
//         wrongAnswersCount++
//         document.querySelector('#question-box').innerHTML = '<h1>Wrong... Leslie was born in Eagleton</h1>'
//         document.querySelector('#answer-box').innerHTML = `<img id="answer-image" src="./assets/images/correct-answer-1.jpg">`
//         document.querySelector('#timer-box').style.display = 'none'
//         document.querySelector('#next-question').innerHTML = `<h4>Next Question</h4>`
//     })

//     document.querySelector('#answer-2').addEventListener('click', function() {
//         wrongAnswersCount++
//         document.querySelector('#question-box').innerHTML = '<h1>Wrong... Leslie was born in Eagleton</h1>'
//         document.querySelector('#answer-box').innerHTML = `<img id="answer-image" src="./assets/images/correct-answer-1.jpg">`
//         document.querySelector('#timer-box').style.display = 'none'
//         document.querySelector('#next-question').innerHTML = `<h4>Next Question</h4>`
//     })
// }

// const secondQuestion = _ => {
//     console.log("second question fired")
// }