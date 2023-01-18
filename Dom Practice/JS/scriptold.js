//to select an element based on its id yu use doucment. getElementById('id-name")
let titleEl = document.getElementById('title');
console.log(titleEl);

//to select an element that does not have an id
let titleElb = document.querySelector('#title');
console.dir(titleElb);

//if you are selecting something that matches more than one thing in your HTML, it only reisters the first one 
let pE1 = document.querySelector('.cool');
console.dir(pE1);

//to change style of any element that has already been seelect*, you use style.property.
pE1.style.color = 'purple'
pE1.style.textAlign = 'left'
pE1.classList.add('bold')

// pE1.classList.toggle('cool')
// pE1.classList.toogle('cool')

console.log(pE1.class.List.contains('yellow'))

let aE1 = document.querySelector('a')
aE1.setAttribute('href', 'http://www.google.com')


//selecting multple 
const liEls = document.querySelectorAll('comment')
console.log(liEls)

for(let commetEl of liEls) {
    console.log(commentE1)
    commentEl.style.fontSize = '30px'
}
