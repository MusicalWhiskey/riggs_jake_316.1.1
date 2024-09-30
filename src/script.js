// import = "./styles.css";

console.log('316.1.1'),
//=======================================

mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');

const topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');

topMenuEl.classList.add('flex-around');

const menuLinks = [
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

menuLinks.forEach(function(link) {
  var linkElement = document.createElement('a');
  
  linkElement.setAttribute('href', link.href);
  
  linkElement.textContent = link.text;
  
  topMenuEl.appendChild(linkElement)
  
  // subMenuEl.appendChild(linkElement);
});

const subMenuEl = document.getElementById( id="sub-menu");

subMenuEl.style.height = "100%";

const customBgColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');
subMenuEl.style.backgroundColor = customBgColor;

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();

  if (event.target.tagName === 'A') {
    const allLinks = topMenuEl.querySelectorAll('a');
    allLinks.forEach(link => link.classList.remove('active'));

    event.target.classList.toggle('active');
  }
});

//=================================================

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();


  if (event.target.tagName === 'A') {
    const clickedLink = event.target;
    const linkHref = clickedLink.getAttribute('href');

    //console log clicked link
    console.log(`Clicked link: ${clickedLink.textContent}`);

    // Find the corresponding link object in menuLinks
    const linkObject = menuLinks.find(link => link.href === linkHref);

    if (linkObject) {
      if (linkObject.subLinks) {
        // Show the submenu
        subMenuEl.style.top = '100%';
      } else {
        // Hide the submenu
        subMenuEl.style.top = '0';
      }

      // Toggle the "active" class for the clicked link
      const allLinks = topMenuEl.querySelectorAll('a');
      allLinks.forEach(link => link.classList.remove('active'));
      clickedLink.classList.toggle('active');
    }
  }
});

//**Can't get submenu links attached */
//====================================================

