const modalOpenButton = document.querySelector('.open-btn')
const modalCloseButton = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const gameModal = document.querySelector('.main-game')
const playAgainButton = document.querySelector('.play-again')
const user = document.querySelector('#user-choice')
const pc = document.querySelector('#computer-choice')
const computerChoiceList = ['rock', 'paper', 'scissors']
const choices = document.querySelectorAll('.game-btn')
const winner = document.querySelector('.winner')
let userChoice = undefined
let userScoreValue = document.querySelector('.score-value')
let score = 0

choices.forEach(choice => {
    choice.addEventListener('click', ()=>{
        userChoice = choice.getAttribute('data-choice')
        gameModal.classList.add('modal-active')
        checkWinner()
    })
})

function computerRandomChoice(){
    return computerChoiceList[Math.floor(Math.random() * computerChoiceList.length)]
}

function updateValue(){
    score += 1
    userScoreValue.innerHTML = score
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
    const img = selectedEL.querySelector('img')
    img.src = `./img/icon-${choicedEL}.svg`
}

playAgainButton.addEventListener('click', ()=>{
    gameModal.classList.remove('modal-active')
})

modalOpenButton.addEventListener('click', ()=>{
    modal.classList.add('active')
})

modalCloseButton.addEventListener('click', ()=>{
    modal.classList.remove('active')
})