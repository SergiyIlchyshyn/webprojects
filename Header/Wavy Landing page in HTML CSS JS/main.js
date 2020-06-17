const triggerMenu = document.querySelector('.menu-trigger');

function handleNavigation() {
    const body = document.querySelector('body');
    body.classList.toggle('is-navigation-open');
}

triggerMenu.addEventListener('click', handleNavigation);