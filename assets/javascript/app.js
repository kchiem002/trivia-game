let correctAnswersCount = 0
let wrongAnswersCount = 0
let unansweredCount = 0
let count
let themeSong = document.querySelector('#theme-song')
let gameArray = [
    {
        question: "Our sweet leader, Leslie Knope, was born in which city?",
        answers: ["Pawnee", "Indianapolis", "Eagleton"],
        correctAnswer: "Eagleton"
    },
    {
        question: "Where is Tom Haverford from?",
        answer1: "South Carolina",
        answer2: "Connecticutt",
        answer3: "Libya",
    },
]
const checkUserGuess = () => {
    console.log("checkUserGuess")
}

const startGame = _ => {
    console.log("start game")
    for (let i = 0; i < gameArray[0].answers.length; i++) {
        let guessButton = document.createElement('h2')
        guessButton.innerHTML = gameArray[0].answers[i]
        guessButton.onclick = checkUserGuess
        document.querySelector('#answer-box').append(guessButton)
    }
}
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