const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')

const choices = ['rock', 'paper', 'scissors']

const clickHandler = (e) => {
    getResult(e.target.value, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerText = choice
    button.value = choice
    button.addEventListener('click', clickHandler)
    choicesDisplay.appendChild(button)
})


const getResult = (playerChoice, computerChoice) => {

    const pScore = Number(playerScore.innerHTML.split(' ')[2])
    const cScore = Number(computerScore.innerHTML.split(' ')[2])

    if (pScore === 10 < 10 || cScore < 10) {

        switch (playerChoice + computerChoice) {
            case 'rockscissors':
            case 'scissorspaper':
            case 'paperrock':
                notification('Kazandın')
                resultDisplay.innerHTML = 'Rakibin seçtiği:' + computerChoice
                playerScore.innerHTML = `Oyuncu Skoru ${pScore + 1}`
                break;

            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                notification('Kaybettin')
                resultDisplay.innerHTML = 'Rakibin seçtiği:' + computerChoice
                computerScore.innerHTML = `Bilgisayar Skoru ${cScore + 1}`
                break;

            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                notification('Berabere')
                resultDisplay.innerHTML = 'Rakibin seçtiği:' + computerChoice
                break;
        }

    }
    if (pScore === 10 || cScore === 10) {
        notification('Oyun Bitti')
        resultDisplay.innerHTML = 'Oyun Bitti'
    }

}

const notification = msg => {

    let old_div = document.querySelector('.result')

    if (old_div) {
        old_div.remove()
    }

    const div = document.createElement('div')
    div.classList = 'result'
    div.innerText = msg
    document.body.appendChild(div)

    setTimeout(() => div.classList.add('active'), 1)
    setTimeout(() => div.classList.remove('active'), 1000)
}