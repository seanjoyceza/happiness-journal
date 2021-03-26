//navbar
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('load', (event) => {
    for (let navLink of navLinks) {
        navLink.classList.remove('active')
    }
});

const dropdownMenu2 = document.querySelector('#dropdownMenu2')
const calender = document.querySelector('.calender')
const radios = document.querySelector('.radios')
const list = document.querySelector('.list')
const selected_entry = document.querySelector('.selected_entry')
const homepage_entry_list = document.querySelectorAll('.entry_heading')
const asc_button = document.querySelector('#ascend')
const des_button = document.querySelector('#descend')
const date_button = document.querySelector('#date')
const alpha_button = document.querySelector('#alpha')



asc_button.addEventListener('change', (event) => {
    if (date_button.checked) {
        sortingAscDate()
    } else {
        sortingAscAlpha()
    }
});

des_button.addEventListener('change', (event) => {
    if (date_button.checked) {
        sortingDesDate()
    } else {
        sortingDesAlpha()
    }
});

date_button.addEventListener('change', (event) => {
    sortingDate()
});

alpha_button.addEventListener('change', (event) => {
    sortingAlpha()
});


function sortingAscDate() {
    // Select container with all entries
    let container = list;
    // Returns HTMLCollection that contains all child elements
    let divCard = container.children;

    // Convert selected HTML elements into array using slice
    divCard = Array.prototype.slice.call(divCard);
    // Sort this new array using .sort
    divCard.sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    })
    // Append array into container 
    for (let i = 0, l = divCard.length; i < l; i++) {
        container.appendChild(divCard[i]);
    }
    return container;
}

function sortingDesDate() {
    let container = list;
    let divCard = container.children;

    divCard = Array.prototype.slice.call(divCard);
    divCard.sort(function (a, b) {
        if (a.textContent > b.textContent) {
            return -1;
        } else {
            return 1;
        }
    })

    for (let i = 0, l = divCard.length; i < l; i++) {
        container.appendChild(divCard[i]);
    }
    return container;
}




function sortingAscAlpha() {
    let container = list;
    let divCard = container.children;

    divCard = Array.prototype.slice.call(divCard);
    divCard.sort(function (a, b) {
        if (a.childNodes[1].childNodes[1].childNodes[3].innerText > b.childNodes[1].childNodes[1].childNodes[3].innerText) {
            return -1;
        } else {
            return 1;
        }
    })

    for (let i = 0, l = divCard.length; i < l; i++) {
        container.appendChild(divCard[i]);
    }
    return container;
}

function sortingDesAlpha() {
    let container = list;
    let divCard = container.children;

    divCard = Array.prototype.slice.call(divCard);
    divCard.sort(function (a, b) {
        if (a.childNodes[1].childNodes[1].childNodes[3].innerText < b.childNodes[1].childNodes[1].childNodes[3].innerText) {
            return -1;
        } else {
            return 1;
        }
    })

    for (let i = 0, l = divCard.length; i < l; i++) {
        container.appendChild(divCard[i]);
    }
    return container;
}


function sortingDate() {
    let container = list;
    let divCard = container.children;

    divCard = Array.prototype.slice.call(divCard);
    divCard.sort(function (a, b) {
        if (a.textContent > b.textContent) {
            return -1;
        } else {
            return 1;
        }
    })

    for (let i = 0, l = divCard.length; i < l; i++) {
        container.appendChild(divCard[i]);
    }
    return container;
}

function sortingAlpha() {
    let container = list;
    let divCard = container.children;

    divCard = Array.prototype.slice.call(divCard);
    divCard.sort(function (a, b) {
        if (a.childNodes[1].childNodes[1].childNodes[3].innerText < b.childNodes[1].childNodes[1].childNodes[3].innerText) {
            return -1;
        } else {
            return 1;
        }
    })

    for (let i = 0, l = divCard.length; i < l; i++) {
        container.appendChild(divCard[i]);
    }
    return container;
}