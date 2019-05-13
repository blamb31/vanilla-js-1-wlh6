// let name = prompt('what is your name?')
let name = 'Mark'
let greetingNode = document.getElementById('greeting')

greetingNode.innerText = `Hello, ${name}!`

function double() {
  let number = document.getElementById('number').value
  let result = document.getElementById('result')
  result.innerText = `the result is: ${number * 2}`
}

function makeBlue() {
  let shapes = document.getElementsByClassName('shape')
  
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].classList.add('blue')
  }
}

function makeSquare() {
  let shapes = document.getElementsByClassName('shape')
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].classList.remove('shape')
    i--
  }
}
