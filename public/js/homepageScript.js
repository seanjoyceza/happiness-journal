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
const dropdownMenu2 = document.querySelector('#dropdownMenu2')
const calender = document.querySelector('.calender')
const radios = document.querySelector('.radios')
const list = document.querySelector('.list')
const selected_entry = document.querySelector('.selected_entry')
const homepage_entry = document.querySelector('.homepage_entry')
const homepage_entry_list = document.querySelectorAll('.entry_heading')
const asc_button = document.querySelector('#ascend')
const des_button = document.querySelector('#descend')


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


day.forEach(item => {
    item.addEventListener('click', (event) => {
        removeSelection()
        item.classList.add('selectedDay')
        selected_entry.hidden = false;
        let after = ''
        if (item.innerText === '1' || item.innerText === '21') {
            after = 'st';
        } else if (item.innerText === '2' || item.innerText === '22') {
            after = 'nd'
        } else if (item.innerText === '3' || item.innerText === '23') {
            after = 'rd'
        } else {
            after = 'th'
        }
        homepage_entry.innerText = `${months[whatMonthIsIt]} ${item.innerText}${after}, ${whatYearIsIt}`;
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




