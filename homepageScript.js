//navbar
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('load', (event) => {
    for (let navLink of navLinks) {
        navLink.classList.remove('active')
    }
});

//calender title
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthPrev = document.querySelector('.monthPrev')
const monthNext = document.querySelector('.monthNext')
let todayMonth = document.querySelector('li span')
let todayYear = document.querySelector('.year')
let date = new Date();
let whatMonthIsIt = date.getMonth()
let whatYearIsIt = date.getFullYear()

window.addEventListener('load', (event) => {
    todayMonth.innerText = months[whatMonthIsIt];
    todayYear.innerText = whatYearIsIt;

})

monthPrev.addEventListener('click', (event) => {
    if (whatMonthIsIt === 0) {
        whatMonthIsIt = 11;
        whatYearIsIt -= 1;
        todayMonth.innerText = months[whatMonthIsIt];
        todayYear.innerText = whatYearIsIt;
        shouldGrey();
    } else {
        whatMonthIsIt -= 1;
        todayMonth.innerText = months[whatMonthIsIt];
    }
})

monthNext.addEventListener('click', (event) => {
    if (whatMonthIsIt === 11) {
        whatMonthIsIt = 0;
        whatYearIsIt += 1;
        todayMonth.innerText = months[whatMonthIsIt];
        todayYear.innerText = whatYearIsIt;
    } else {
        whatMonthIsIt += 1;
        todayMonth.innerText = months[whatMonthIsIt];
    }
})

//calender days
const day = document.querySelectorAll('.eachDay')
const day29 = document.querySelectorAll('.twoNine')
const day30 = document.querySelectorAll('.three')
const day31 = document.querySelectorAll('.threeOne')

window.addEventListener('load', (event) => {

});

day.forEach(item => {
    item.addEventListener('click', (event) => {
        removeSelection()
        item.classList.add('selectedDay')
    })
})

function removeSelection() {
    day.forEach(item => {
        item.classList.remove('selectedDay')
    })
}

// function shouldGrey() {
//     if (whatMonthIsIt === 0 || whatMonthIsIt === 2 || whatMonthIsIt === 4 || whatMonthIsIt === 6 || whatMonthIsIt === 7 || whatMonthIsIt === 9 || whatMonthIsIt === 11) {
//         day31.classList.add('thirtyOne')
//     }
// }