var burger = document.querySelector('#burger');
var header = document.querySelector('header');
var body = document.querySelector('body');
var nav = document.querySelector('.main__navigation')
var dim = document.querySelector('#dim');

burger.addEventListener('click', onClickHandler);
nav.addEventListener('click', onClickHandler);

function onClickHandler() {
  header.classList.toggle('open');
  body.classList.toggle('no-scroll');
  dim.classList.toggle('dim');
}
