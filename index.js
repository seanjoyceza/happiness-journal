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
    res.render('home.ejs', { user, userEntries }) //it assumes to look in views directory
})

app.get('/l', (req, res) => {
    const user = data.seanjoyce.first_name;
    const userEntries = data.seanjoyce.entries;
    let userEntries_dateAsc = userEntries;
    let userEntries_dateDes = userEntries;
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

    res.render('home_listview.ejs', { user, userEntries_dateAsc, userEntries_dateDes }) //it assumes to look in views directory
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
