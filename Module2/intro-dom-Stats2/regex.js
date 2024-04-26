// Menu data structure
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

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

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

    // Attach a click event listener to each menu item
    aElement.addEventListener('click', function(event) {
        // Prevent default action
        event.preventDefault();

        // Toggle the "active" class for the clicked <a> element
        aElement.classList.toggle('active');

        // Loop through each <a> element in topMenuEl
        topMenuEl.querySelectorAll('a').forEach(function(item) {
            // Remove the "active" class from each <a> element except the clicked one
            if (item !== aElement) {
                item.classList.remove('active');
            }
        });

        // Find the corresponding link object within menuLinks array
        const clickedLink = menuLinks.find(item => item.text === link.text);

        // If the clicked <a> element has subLinks, set the submenu to show
        if (clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
            // Build submenu
            buildSubmenu(clickedLink.subLinks);
        } else {
            // If not, set the submenu to hide
            subMenuEl.style.top = '0';
        }
    });
});

// Log the content of the <a> element
topMenuEl.addEventListener('click', function(event) {
    // Check if the clicked element was an <a> element
    if (event.target.matches('a')) {
        console.log(event.target.textContent);
    }
});
