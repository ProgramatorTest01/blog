const express = require('express')
const app = express()
const port = 3000

const cookieParser = require('cookie-parser')
const expressSess = require('express-session')
app.use(cookieParser())
app.use(expressSess({ secret: "Id of session" }));

app.get('/', function (req, res) {
    if (req.session.visits) {
        req.session.visits++;
        res.send("Wizyta nr " + req.session.visits);
    } else {
        req.session.visits = 1;
        res.send("Witaj po raz pierwszy!");
    }
});

app.get('/test',
    (req, res) => {
        res.send('Testowa podstrona!')
    }
)

app.get('/test/:id',
    (req, res) => {

        var cookieVal = req.cookies.id === undefined ? 'brak' : req.cookies.id;

        res.cookie("id", req.params.id, { expire: 360000 + Date.now() })
            .send(`Poprzedni parametr: ${cookieVal}, bieżący parametr: ${req.params.id}`)
    }
)


app.get('/test/:id/:param2',
    (req, res) => {
        console.log(req.params.id);
        console.log(req.params.param2);
        res.send(`Podstrona z parametrem! ${req.params.id}   ` + req.params.param2)
    }
)

app.get('*',
    (req, res) => {
        res.send('Brak wskazanego adresu')
    }
)

app.listen(port,
    () => console.log(`Example app listening on port ${port}!`))


