// DATA START
const { v4: uuid } = require('uuid')
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let data =
{
    seanjoyce: {
        first_name: "Sean",
        entries: [
            {
                id: uuid(),
                date_num: "20210312",
                date: "March 12th, 2021",
                subject: "Leadership Seminar",
                entry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique itaque quaerat, inventore nesciunt voluptatum ipsa voluptas illum? Quaerat similique, quis facilis quo cumque animi officiis molestiae omnis doloremque itaque veniam? Iusto voluptas quam explicabo excepturi quas, perspiciatis provident. Tenetur consequatur rerum explicabo error sunt! Et expedita id odio mollitia, exercitationem possimus, doloremque tempore libero, totam ullam nostrum qui eveniet molestias. Culpa, magni. Odio autem quas quis mollitia, ipsa provident. Aut sunt maiores dolorem, doloribus laborum esse obcaecati odit maxime tempora at sequi distinctio. Iste nisi non blanditiis aliquid voluptatibus quam? Qui quidem consequuntur aliquid nam suscipit ipsa labore eveniet dignissimos reprehenderit expedita, voluptatibus excepturi nesciunt architecto necessitatibus exercitationem ullam molestias ut dolore rem minus perspiciatis doloribus voluptatem? Nihil",
                rating: 8,
                tag: "Leadership"
            },
            {
                id: uuid(),
                date_num: "20210314",
                date: "March 14th, 2021",
                subject: "Work Event",
                entry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique itaque quaerat, inventore nesciunt voluptatum ipsa voluptas illum? Quaerat similique, quis facilis quo cumque animi officiis molestiae omnis doloremque itaque veniam? Iusto voluptas quam explicabo excepturi quas, perspiciatis provident. Tenetur consequatur rerum explicabo error sunt! Et expedita id odio mollitia, exercitationem possimus, doloremque tempore libero, totam ullam nostrum qui eveniet molestias. Culpa, magni. Odio autem quas quis mollitia, ipsa provident. Aut sunt maiores dolorem, doloribus laborum esse obcaecati odit maxime tempora at sequi distinctio. Iste nisi non blanditiis aliquid voluptatibus quam? Qui quidem consequuntur aliquid nam suscipit ipsa labore eveniet dignissimos reprehenderit expedita, voluptatibus excepturi nesciunt architecto necessitatibus exercitationem ullam molestias ut dolore rem minus perspiciatis doloribus voluptatem? Nihil",
                rating: 9,
                tag: "Work"
            },
            {
                id: uuid(),
                date_num: "20210313",
                date: "March 13th, 2021",
                subject: "Sermon",
                entry: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique itaque quaerat, inventore nesciunt voluptatum ipsa voluptas illum? Quaerat similique, quis facilis quo cumque animi officiis molestiae omnis doloremque itaque veniam? Iusto voluptas quam explicabo excepturi quas, perspiciatis provident. Tenetur consequatur rerum explicabo error sunt! Et expedita id odio mollitia, exercitationem possimus, doloremque tempore libero, totam ullam nostrum qui eveniet molestias. Culpa, magni. Odio autem quas quis mollitia, ipsa provident. Aut sunt maiores dolorem, doloribus laborum esse obcaecati odit maxime tempora at sequi distinctio. Iste nisi non blanditiis aliquid voluptatibus quam? Qui quidem consequuntur aliquid nam suscipit ipsa labore eveniet dignissimos reprehenderit expedita, voluptatibus excepturi nesciunt architecto necessitatibus exercitationem ullam molestias ut dolore rem minus perspiciatis doloribus voluptatem? Nihil",
                rating: 10,
                tag: "Faith"
            }
        ]
    }
}
// DATA END 
// console.log(data.seanjoyce.entries[1])


const express = require('express');
const app = express()
const path = require('path')
// const data = require('./data.json')
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))//parses form data
app.use(express.json())//parses JSON data
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log("Listening")
})

app.get('/', (req, res) => {
    const user = data.seanjoyce.first_name;
    const userEntries = data.seanjoyce.entries;


    let hasEntry = [];
    for (entry of userEntries) {
        hasEntry.push(entry.date_num);
    }
    res.render('home.ejs', { user, userEntries, hasEntry }) //it assumes to look in views directory
    //can also do ...data to access data in ejs file 
})

app.get('/l', (req, res) => {
    const user = data.seanjoyce.first_name;
    const userEntries = data.seanjoyce.entries;
    let userEntries_dateAsc = userEntries;
    let userEntries_dateDes = userEntries;
    // res.json(user)
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

// Render new entry page
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Send add entry data to database 
app.post('/l', (req, res) => {
    const userEntries = data.seanjoyce.entries;
    console.log(req.body)
    let { subject, entry, tag, rating, date_num } = req.body;
    date_num = date_num.replace(/-/g, "");
    let newEntry =
    {
        id: uuid(),
        date_num: `${date_num}`,
        date: `${months[parseInt(date_num.substring(4, 6)) - 1]} ${date_num.substring(6)}, ${date_num.substring(0, 4)}`,
        subject: `${subject}`,
        entry: `${entry}`,
        rating: `${rating}`,
        tag: `${tag}`
    }
    userEntries.push(newEntry)
    res.redirect('/l')//redirects the user back to comments
})

// Show route
app.get('/:id', (req, res) => {
    const { id } = req.params;
    const userEntries = data.seanjoyce.entries;
    const userEntry = userEntries.find(entry => entry.id === id);
    res.render('entry.ejs', { userEntry })
})

app.get('/entry', (req, res) => {
    res.render('entry.ejs')
})


app.get('*', (req, res) => {
    res.send("Page URL not recognised")
})


