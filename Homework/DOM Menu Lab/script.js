const mainEl =document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'

//created a new h1 header in 'main'
const newH1 = document.createElement('h1') 
newH1.textContent =  'WISE Rocks!' 
//console.log(newH1)
document.querySelector('main').appendChild(newH1)

//add a new class to main
mainEl.classList.add('flex-ctr')

//get 'nav id top-menu' element info
const topMenuEl = document.getElementById('top-menu')
//mainEl.textContent = topMenuEl
//topMenuEl.style.height = ('100%')
topMenuEl.style.backgroundColor = 'var(--top-menu-)'

//add new class to top menu
topMenuEl.classList.add('flex-around')