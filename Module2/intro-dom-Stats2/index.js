// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
// ];

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.getElementById('sub-menu');

// Set the height of subMenuEl element to be "100%"
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');

// Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add('flex-around');

// Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = "0";

// Select and cache all <a> elements inside topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
    // Call preventDefault() on the event object
    event.preventDefault();
    
    // Check if the clicked element was not an <a> element
    if (!event.target.matches('a')) return;

    // Log the content of the <a> element
    console.log(event.target.textContent);
});

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
    // Call preventDefault() on the event object
    event.preventDefault();
    
    // Check if the clicked element was not an <a> element
    if (!event.target.matches('a')) return;

    // Toggle the "active" class for the clicked <a> element
    event.target.classList.toggle('active');

    // Loop through each <a> element in topMenuLinks
    topMenuLinks.forEach(function(link) {
        // Remove the "active" class from each <a> element except the clicked one
        if (link !== event.target) {
            link.classList.remove('active');
        }
    });
});

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
    // Call preventDefault() on the event object
    event.preventDefault();
    
    // Check if the clicked element was not an <a> element
    if (!event.target.matches('a')) return;

    // Toggle the "active" class for the clicked <a> element
    event.target.classList.toggle('active');

    // Loop through each <a> element in topMenuLinks
    topMenuLinks.forEach(function(link) {
        // Remove the "active" class from each <a> element except the clicked one
        if (link !== event.target) {
            link.classList.remove('active');
        }
    });

    // Find the corresponding link object within menuLinks array
    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

    // Check if the clicked <a> element was inactive
    if (!event.target.classList.contains('active')) {
        // If the clicked <a> element has subLinks, set the submenu to hide
        if (clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
        } else {
            subMenuEl.style.top = '0';
        }
    }
});

// Helper function to build submenu
function buildSubmenu(subLinks) {
    // Clear the current contents of subMenuEl
    subMenuEl.innerHTML = '';

    // Iterate over the subLinks array and build submenu
    subLinks.forEach(function(link) {
        // Create an <a> element
        const submenuLink = document.createElement('a');
        
        // Add href attribute
        submenuLink.setAttribute('href', link.href);
        
        // Set content
        submenuLink.textContent = link.text;

        // Append to subMenuEl
        subMenuEl.appendChild(submenuLink);
    });
}

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
    // Call preventDefault() on the event object
    event.preventDefault();
    
    // Check if the clicked element was not an <a> element
    if (!event.target.matches('a')) return;

    // Toggle the "active" class for the clicked <a> element
    event.target.classList.toggle('active');

    // Loop through each <a> element in topMenuLinks
    topMenuLinks.forEach(function(link) {
        // Remove the "active" class from each <a> element except the clicked one
        if (link !== event.target) {
            link.classList.remove('active');
        }
    });

    // Find the corresponding link object within menuLinks array
    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

    // Check if the clicked <a> element was inactive
    if (!event.target.classList.contains('active')) {
        // If the clicked <a> element has subLinks, set the submenu to hide
        if (clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
        } else {
            subMenuEl.style.top = '0';
        }
    } else {
        // If the clicked <a> element has subLinks, set the submenu to show
        if (clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
            // Build submenu
            buildSubmenu(clickedLink.subLinks);
        } else {
            subMenuEl.style.top = '0';
        }
    }
});

// Helper function to build submenu
function buildSubmenu(subLinks) {
    // Clear the current contents of subMenuEl
    subMenuEl.innerHTML = '';

    // Iterate over the subLinks array and build submenu
    subLinks.forEach(function(link) {
        // Create an <a> element
        const submenuLink = document.createElement('a');
        
        // Add href attribute
        submenuLink.setAttribute('href', link.href);
        
        // Set content
        submenuLink.textContent = link.text;

        // Append to subMenuEl
        subMenuEl.appendChild(submenuLink);
    });
}

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
    // Call preventDefault() on the event object
    event.preventDefault();
    
    // Check if the clicked element was not an <a> element
    if (!event.target.matches('a')) return;

    // Toggle the "active" class for the clicked <a> element
    event.target.classList.toggle('active');

    // Loop through each <a> element in topMenuLinks
    topMenuLinks.forEach(function(link) {
        // Remove the "active" class from each <a> element except the clicked one
        if (link !== event.target) {
            link.classList.remove('active');
        }
    });

    // Find the corresponding link object within menuLinks array
    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

    // Check if the clicked <a> element was inactive
    if (!event.target.classList.contains('active')) {
        // If the clicked <a> element has subLinks, set the submenu to hide
        if (clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
        } else {
            subMenuEl.style.top = '0';
        }
    } else {
        // If the clicked <a> element has subLinks, set the submenu to show
        if (clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
            // Build submenu
            buildSubmenu(clickedLink.subLinks);
        } else {
            subMenuEl.style.top = '0';
        }
    }
});


