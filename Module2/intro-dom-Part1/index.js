// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// Selecting the <nav id="top-menu"> element
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Iterate over each link in the menuLinks array and create menu items
menuLinks.forEach(function(link) {
    // Create a new <a> element
    const aElement = document.createElement('a');
    
    // Set the href attribute
    aElement.setAttribute('href', link.href);

    // Set the text content
    aElement.textContent = link.text;

    // Append the <a> element to the topMenuEl
    topMenuEl.appendChild(aElement);
});

// Select and manipulate the <main> element
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Logging elements to the console (optional, for debugging purposes)
console.log(mainEl);
console.log(topMenuEl);
