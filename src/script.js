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
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

menuLinks.forEach(function(link) {
  var linkElement = document.createElement('a');
  
  linkElement.setAttribute('href', link.href);
  
  linkElement.textContent = link.text;
  
  topMenuEl.appendChild(linkElement);
});
