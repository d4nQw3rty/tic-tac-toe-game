const menu = document.querySelector('.menu');
const menuItems = menu.querySelector('.items')
menu.addEventListener('click',event => {
    menuItems.classList.toggle('hidden')
})