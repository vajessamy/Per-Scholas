//takes the info in the input field and saves to list on click of button
const button = document.querySelector('button')
const input = document.querySelector('input')
 button.addEventListener('click', (event) => {
    const newLi = document.createElement('li') 
    newLi.textContent = input.value
    document.querySelector('ul').appendChild(newLi)
    console.log(event)
    console.log(input.value)
 })

//changing a element in a list to red on click put the event on the ul not the line so that all lines will change
 const ul = document.querySelector('ul')
    ul.addEventListener('click', (event) => {
    event.target.style.color = 'red'
 })

 //another way of doing the above
//  const handleClick = (event) => {
//  event.target.style.color = 'green'
//  }
//  ul.addEventListener('click', handleClick)

 
// used to remove click 
//ul.removeEventListener('click', handclick) 

