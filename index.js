const express = require('express');
const app = express()
const path = require('path')
const data = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log("Listening")
})

app.get('/', (req, res) => {
    const user = data.seanjoyce.first_name;
    const userEntries = data.seanjoyce.entries;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let hasEntry = [];
    for (entry of userEntries) {
        hasEntry.push(entry.date_num);
    }
    res.render('home.ejs', { user, userEntries, hasEntry }) //it assumes to look in views directory
})

app.get('/l', (req, res) => {
    const user = data.seanjoyce.first_name;
    const userEntries = data.seanjoyce.entries;
    let userEntries_dateAsc = userEntries;
    let userEntries_dateDes = userEntries;
    res.json(user)
    //sort bydate ascending
    userEntries_dateAsc.sort((a, b) => {
        if (a.date_num < b.date_num) {
            return -1;
        } else {
            return 1;
        }
    })
    //sort by date descending
    userEntries_dateDes.sort((a, b) => {
        if (a.date_num > b.date_num) {
            return -1;
        } else {
            return 1;
        }
    })

    res.render('home_listview.ejs', { user, userEntries, userEntries_dateAsc, userEntries_dateDes }) //it assumes to look in views directory
})

app.get('/new', (req, res) => {
    res.render('new.ejs')
})

app.get('/entry', (req, res) => {
    res.render('entry.ejs')
})


app.get('*', (req, res) => {
    res.send("Page URL not recognised")
})



