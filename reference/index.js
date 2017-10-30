var input = document.getElementById('userInput')
var button = document.getElementById('userSend')
var display = document.getElementById('display')

button.onclick = function () {
  console.log(input.value)

  display.innerHTML += '<br />' + input.value

  input.remove()
  button.remove()
}