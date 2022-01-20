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
let userScoreValue = document.querySelector('.score-value')
let userChoice = undefined
let score = []

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

function updateValue(){
    score += 1
    userScoreValue.innerHTML = score
    localStorage.setItem('userScore',score)
}

let value = localStorage.getItem('userScore', score)
if(value){
    userScoreValue.innerHTML = score = JSON.parse(localStorage.getItem('userScore', score))
    resetModalBtn.style.display = 'block'
}else{
    resetModalBtn.style.display = 'block'
}

if(score >= 1){
    resetModalBtn.style.display = 'block'
}else{
    resetModalBtn.style.display = 'none '
}

function checkWinner(){
    let computerChoice = computerRandomChoice()
    selection(user, userChoice)
    selection(pc, computerChoice)
    if(userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'rock'){
        updateValue(1)
        winner.innerHTML = 'YOU WIN'
        console.log(computerRandomChoice());
    }else if(userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock'){
        console.log(computerRandomChoice());
        winner.innerHTML = 'YOU LOSE'
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
    localStorage.clear('userScore', score)
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