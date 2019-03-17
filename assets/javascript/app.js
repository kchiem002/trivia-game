let correctAnswersCount
let wrongAnswersCount
let unansweredCount
let themeSong = document.querySelector('#theme-song')
let gameArray = [
    {
        question: "Our sweet leader, Leslie Knope, was born in which city?",
        answer1: "Pawnee",
        answer2: "Indianapolis",
        answer3: "Eagleton",
        answer4: "Bloomington",
    },
    {
        question: "Question 2",
        answer1: "Choice 1",
        answer2: "Choice 2",
        answer3: "Choice 3",
        answer4: "Choice 4",
    },
]

const startGame = _ => {
    themeSong.play()
    document.querySelector('#question-box').innerHTML = `<h1>${gameArray[0].question}</h1>`    
    document.querySelector('#answer-1').innerHTML = `<h2>${gameArray[0].answer1}</h2>`
    document.querySelector('#answer-2').innerHTML = `<h2>${gameArray[0].answer2}</h2>`
    document.querySelector('#answer-3').innerHTML = `<h2>${gameArray[0].answer3}</h2>`
    document.querySelector('#answer-4').innerHTML = `<h2>${gameArray[0].answer4}</h2>`
    document.querySelector('#timer-box').innerHTML = `<h3>Time Remaining:</h3>`
}