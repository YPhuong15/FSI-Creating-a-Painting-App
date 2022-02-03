let selectedColor = 'blue'
const painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

let choice1 = document.querySelector('#red') 
choice1.addEventListener('click', function() {
    selectedColor = 'red'
})

let choice2 = document.querySelector('#yellow') 
choice2.addEventListener('click', function() {
    selectedColor = 'yellow'
})

let choice3 = document.querySelector('#green') 
choice3.addEventListener('click', function() {
    selectedColor = 'green'
})

let choice4 = document.querySelector('#blue') 
choice4.addEventListener('click', function() {
    selectedColor = 'blue'
})

let choice5 = document.querySelector('#purple') 
choice5.addEventListener('click', function() {
    selectedColor = 'purple'
})

//when user double click, pixel turns white
painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'
})

//add clear button
let button = document.createElement('button')
button.textContent = 'Clear'
document.body.append(button)
button.addEventListener('click', function(){
    selectedColor = 'white'
})
