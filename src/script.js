let collapse = document.querySelector('.collapse-menu')
let nav = document.querySelector('nav ul')
let firstBar = document.querySelector('.one')
let secondBar = document.querySelector('.two')
let thirdBar = document.querySelector('.three')

collapse.addEventListener('click', function(){
  nav.classList.toggle('hide')
  secondBar.classList.toggle('two-animate');
  firstBar.classList.toggle('one-animate');
  thirdBar.classList.toggle('hide');
})

