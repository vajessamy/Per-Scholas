var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  const mainEl = document.querySelector('main')
  // Selects the main element from the HTML (line 15)
  mainEl.style.backgroundColor = 'var(--main-bg)'
  // sets the background color of the main element equal to the value stored in the variable named "--main-bg" in the CSS (line 7)
  mainEl.textContent = "WISE Rocks"
  // sets the text of the main element to WISE Rocks
  mainEl.classList.add('flex-ctr')
  // adds a class to the main element called 'flex-ctr
  
  const topMenuEl = document.getElementById('top-menu')
  // selects the element with the id of 'top menu' from the HTML (line 13)
  topMenuEl.style.height = ('100%')
  // sets the height of the nav we selected above to 100%
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  // sets the background color of the nav we selected above to the value stored in the variable named "--top-menu-bg" in the CSS (line 8)
  topMenuEl.classList.add('flex-around')
  // adds a class to the nav called 'flex-around'
  
  for (let i = 0; i < menuLinks.length; i++) {
    // for loop to loop over the menuLinks array we created at the top
    const newAnchor = document.createElement('a')
    // creates a new anchor (a) tag and sets it to the variable 'newAnchor'
    newAnchor.textContent = menuLinks[i].text
    // sets the text of that anchor tag to the text stored in the menuLinks array
    newAnchor.setAttribute('href', menuLinks[i].href)
    // sets the href attribute of the anchor tag to the href stored in the menuLinks array
    topMenuEl.appendChild(newAnchor)
    // appends that new anchor tag to the nav we selected above
  }