let collapse = document.querySelector('.collapse-menu')
let nav = document.querySelector('nav ul')

collapse.addEventListener('click', function(){
  nav.classList.toggle('hide')
  console.log('clicked');
})