const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WIN = 'PLAYER_WINS'
const RESULT_COMPUTER_WIN = 'COMPUTER_WINS'

let gameIsRunning = false

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase()
  if( 
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`)
    return DEFAULT_USER_CHOICE
  }
  return selection
}

const getComputerChoice = function () {
  const randomValue = Math.random()
  if(randomValue < 0.34) {
    return ROCK
  } else if(randomValue < 0.67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getWinner = function (cChoice, pChoice) {
  if(cChoice === pChoice) {
    return RESULT_DRAW
  } else if (
    cChoice === ROCK && pChoice === PAPER || 
    cChoice === SCISSORS && pChoice === ROCK || 
    cChoice === PAPER && pChoice === SCISSORS) {
    return RESULT_PLAYER_WIN
  } else {
    return RESULT_COMPUTER_WIN
  }
}

startGameBtn.addEventListener('click', function () {
  if(gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Game is starting...')
  const playerChoice = getPlayerChoice()
  const computerChoice = getComputerChoice()
  const winner = getWinner(computerChoice, playerChoice)
  console.log(winner)
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore `
  if(winner === RESULT_DRAW) {
    message = message + 'had a draw'
  } else if(winner === RESULT_PLAYER_WIN) {
    message = message + 'won'
  } else {
    message = message + 'lose'
  }
})
