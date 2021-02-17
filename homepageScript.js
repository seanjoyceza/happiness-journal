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
let whatDayIsIt = date.getDay()
const day = document.querySelectorAll('.eachDay')
let twoNine = document.querySelector('.twoNine')
let threeZero = document.querySelector('.threeZero')
let threeOne = document.querySelector('.threeOne')
const calenderView = document.querySelector('.calenderView')
const listView = document.querySelector('.listView')
const dropdownMenu2 = document.querySelector('#dropdownMenu2')


window.addEventListener('load', (event) => {
    todayMonth.innerText = months[whatMonthIsIt];
    todayYear.innerText = whatYearIsIt;
    shouldGrey()
})

monthPrev.addEventListener('click', (event) => {
    removeSelection()
    if (whatMonthIsIt === 0) {
        whatMonthIsIt = 11;
        whatYearIsIt -= 1;
        todayMonth.innerText = months[whatMonthIsIt];
        todayYear.innerText = whatYearIsIt;
        shouldGrey()
    } else {
        whatMonthIsIt -= 1;
        todayMonth.innerText = months[whatMonthIsIt];
        shouldGrey()
    }
})

monthNext.addEventListener('click', (event) => {
    removeSelection()
    if (whatMonthIsIt === 11) {
        whatMonthIsIt = 0;
        whatYearIsIt += 1;
        todayMonth.innerText = months[whatMonthIsIt];
        todayYear.innerText = whatYearIsIt;
        shouldGrey()
    } else {
        whatMonthIsIt += 1;
        todayMonth.innerText = months[whatMonthIsIt];
        shouldGrey()
    }
})


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

function shouldGrey() {
    if (whatMonthIsIt === 1 || whatMonthIsIt === 3 || whatMonthIsIt === 5 || whatMonthIsIt === 8 || whatMonthIsIt === 10) {
        threeOne.classList.add('thirtyOne')
        if (leapMonth(whatMonthIsIt, whatYearIsIt) === true) {
            twoNine.classList.add('twentyNine')
            threeZero.classList.add('thirty')
        }
    } else {
        twoNine.classList.remove('twentyNine')
        threeZero.classList.remove('thirty')
        threeOne.classList.remove('thirtyOne')
    }
}

function leapMonth(month, year) {
    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) && month === 1;
}

//dropdownToggle
listView.addEventListener('click', (event) => {
    calenderView.classList.remove('selected')
    listView.classList.add('selected')
    dropdownMenu2.innerText = 'List View';
})

calenderView.addEventListener('click', (event) => {
    listView.classList.remove('selected')
    calenderView.classList.add('selected')
    dropdownMenu2.innerText = 'Calender View';
})