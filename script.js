const modalOpenButton = document.querySelector('.open-btn')
const modalCloseButton = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const gameModal = document.querySelector('.game-container')
const playAgainButton = document.querySelector('.play-again')
const user = document.querySelector('#user-choice')
const pc = document.querySelector('#computer-choice')
const computerChoiceList = ['rock', 'paper', 'scissors']
const choices = document.querySelectorAll('.game-btn')
const winner = document.querySelector('.winner')
const resetModalBtn = document.querySelector('.reset-btn')
const resetButton = document.querySelector('#reset')
const closeResetModal = document.querySelector('#close')
const resetWindow = document.querySelector('.reset-modal')
let userScoreValue = document.querySelector('.user-score')
let computerScoreValue = document.querySelector('.computer-score')
let userChoice = undefined
let userScore = []
let computerScore = []

choices.forEach(choice => {
    choice.addEventListener('click', ()=>{
        userChoice = choice.getAttribute('data-choice')
        gameModal.classList.add('game-active')
        checkWinner()
    })
})

function computerRandomChoice(){
    return computerChoiceList[Math.floor(Math.random() * computerChoiceList.length)]
}

function updateUserValue(){
    userScore += 1
    userScoreValue.innerHTML = userScore
    localStorage.setItem('userScore',userScore)
}

function updateComputerValue(){
    computerScore += 1
    computerScoreValue.innerHTML = computerScore
    localStorage.setItem('computerScore', computerScore)
}

let userValue = localStorage.getItem('userScore', userScore)
let computerValue = localStorage.getItem('computerScore', computerScore)
if(userValue){
    userScoreValue.innerHTML = userScore = JSON.parse(localStorage.getItem('userScore', userScore))}else{
}
if(computerValue){
    computerScoreValue.innerHTML = computerScore = JSON.parse(localStorage.getItem('computerScore', computerScore))
}
if(userScore >= 1 || computerScore >= 1){
    resetModalBtn.style.display = 'block'
}else{
    resetModalBtn.style.display = 'none '
}

function checkWinner(){
    let computerChoice = computerRandomChoice()
    selection(user, userChoice)
    selection(pc, computerChoice)
    if(userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'rock'){
        updateUserValue(1)
        winner.innerHTML = 'YOU WIN'
    }else if(userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock'){
        winner.innerHTML = 'YOU LOSE'
        updateComputerValue(1)
    }else if(userChoice === computerChoice){
        winner.innerHTML = 'TIE'
    }
}

function selection(selectedEL, choicedEL){
    selectedEL.classList.remove('rock')
    selectedEL.classList.remove('paper')
    selectedEL.classList.remove('scissors')
    selectedEL.classList.add(`btn-${choicedEL}`)
    const img = selectedEL.querySelector('img')
    img.src = `./img/icon-${choicedEL}.svg`
}

playAgainButton.addEventListener('click', ()=>{
    window.location.reload()
})

resetModalBtn.addEventListener('click', ()=>{
    resetWindow.classList.add('active')
})
resetButton.addEventListener('click', ()=>{
    resetWindow.classList.remove('active')
    localStorage.clear('userScore', userScore)
    localStorage.clear('computerScore', computerScore)
    window.location.reload()
})

closeResetModal.addEventListener('click', ()=>{
    resetWindow.classList.remove('active')
})

modalOpenButton.addEventListener('click', ()=>{
    modal.classList.add('active')
})

modalCloseButton.addEventListener('click', ()=>{
    modal.classList.remove('active')
})