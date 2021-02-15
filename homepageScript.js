//navbar
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('load', (event) => {
    for (let navLink of navLinks) {
        navLink.classList.remove('active')
    }
});

//calender
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthPrev = document.querySelector('.monthPrev')
const monthNext = document.querySelector('.monthNext')
let todayMonth = document.querySelector('li span')

window.addEventListener('load', (event) => {

    todayMonth.innerText = months[number]
})

monthPrev.addEventListener('click', (event) => {

})