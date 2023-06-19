// дістаєм змінні
let number = document.querySelector('.number')
let buttonMin = document.querySelector('.min')
let buttonMax = document.querySelector('.max')

let tenMax = document.querySelector('.tenMax')
let fiveMax = document.querySelector('.fiveMax')
let hundredMax = document.querySelector('.hundredMax')

let buttonReset = document.querySelector('.reset')

// створюєм намберКаунтер яке = 0 і а яке дістає значення з локал сторидж
let numberCounter = 0
let a = Number(localStorage.getItem('counter'))

// якщо а не дорівнює нал то записуєм значення в намбер
if (a == null) {
    numberCounter = 0
} else {
    number.textContent = numberCounter = a
}

// функція збільшення на 1
function more() {
    numberCounter++
    number.textContent = numberCounter
    localStorage.setItem('counter', String(numberCounter))
}

// функція зменшення на 1
function less() {
    numberCounter--
    number.textContent = numberCounter
    localStorage.setItem('counter', String(numberCounter))
}


buttonMax.addEventListener('click', more)
buttonMin.addEventListener('click', less)

// тут я у функції не писала всі ті додавання, але там збільшення на 10, 50 і 100 і ресет
tenMax.addEventListener('click', () => {
    numberCounter += 10
    number.textContent = numberCounter
    localStorage.setItem('counter', String(numberCounter))
})

fiveMax.addEventListener('click', () => {
    numberCounter += 50
    number.textContent = numberCounter
    localStorage.setItem('counter', String(numberCounter))
})

hundredMax.addEventListener('click', () => {
    numberCounter += 100
    number.textContent = numberCounter
    localStorage.setItem('counter', String(numberCounter))
})

buttonReset.addEventListener('click', () => {
    number.textContent = numberCounter = 0
    localStorage.clear()
})