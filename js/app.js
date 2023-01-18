const menuIcon = document.querySelector('.dropdown__menu');
const closeIcon = document.querySelector('.dropdown__close');
const menuIconBox = document.querySelector('.dropdown__menu-box');
const closeIconBox = document.querySelector('.dropdown__close-box');

const navList = document.querySelector('.navigation-list');
const navItems = document.querySelector('.navigation-list__items');


menuIcon.addEventListener('click', () => {
    navItems.style.transition = 'all .4s linear .3s';
    navList.style.width = '45%';
    navItems.style.opacity = '1';
    menuIconBox.style.display = 'none';
    closeIconBox.style.visibility = 'visible';
})


closeIcon.addEventListener('click', () => {
    navItems.style.transition = 'all .1s linear';
    navList.style.width = '0%';
    navItems.style.opacity = '0';
    menuIconBox.style.display = 'inline-block';
    closeIconBox.style.visibility = 'hidden';
})