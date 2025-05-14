/*function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');


}*/

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function setMoodBackground() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 6 && hour < 12) {
        body.classList.add('morning');
    } else if (hour >= 12 && hour < 18) {
        body.classList.add('afternoon');
    } else {
        body.classList.add('night');
    }
}

window.onload = setMoodBackground;

