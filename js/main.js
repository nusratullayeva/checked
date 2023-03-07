const menu = document.querySelector('.menu');
const hidden = document.querySelector('.hidden');

menu.addEventListener('click', () => {
    hidden.classList.toggle('flex-svg')
})