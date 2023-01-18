// To select an element based on its id you use document.getElementById('id-name')

let titleEl = document.getElementById('title')
// correlates to line 12 in the html

// -------------------------

// To select an element that does *not* have an id, you use document.querySelector('selector')

// 'selector' above can be anything you can use in a stylesheet. This can be classes, ids, normal elements, etc.

// If you are selecting something that matches more than one thing in your HTML, it only registers the first one in the file.

let pEl = document.querySelector('.cool');
console.dir(pEl);
// correlates to line 13 in the HTML

// -------------------------

// to change the text inside of an element that *has already been selected* you use textContent.

pEl.textContent = "hello there -- GENERAL KENOBI"

// -------------------------

// to change the style of any element *that has already been selected*, you use style.property.

 pEl.style.color = 'purple'
// changes the text color to purple

 pEl.style.textAlign = 'center'
// changes the alignment to center

// note that instead of kebob case like in CSS (text-align) we use camel case in JavaScript (textAlign)

// -------------------------

// to manipulate the classes in any element that has already been selected, you can use a few things.

pEl.classList.add('bold')
// adds a class to an element

pEl.classList.toggle('cool')
pEl.classList.toggle('cool')
// if the class already exists on the element, it gets rid of it. If the class doesn't exist on the element, it adds it.

console.log(pEl.classList.contains('yellow'))
// The contains property returns true if the class exists on the element, and false if it does not exist.

pEl.classList.replace('bold', 'yellow')
// replace 'replaces' one class on the element with another class. This one replaces bold with yellow.

// -------------------------

let aEl = document.querySelector('a');
// correlates to line 16 in the HTML

// setAttribute is very powerful and can be used for many things. for example: Can be used to set classes on an element, can be used to set href, src, ids, etc.

aEl.setAttribute('href', 'http://www.google.com')
// this sets the href (hypertext reference) or target of the link

const imgEl= document.querySelector('img')
imgEl.setAttribute('src', "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg")


//selecting multple element (class)
 const liEls = document.querySelectorAll('.comment')
 console.log(liEls)

for(let commentEl of liEls) {
    console.log(commentEl)
    commentEl.style.fontSize = '30px'
}
// To select multiple elements at the same time, you use document.querySelectorAll('selector').


