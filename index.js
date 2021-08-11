const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('this is my secret'));


app.get('/greet', (req, res) => {
    const { name = 'No-name'} = req.cookies;
    res.send(`<h1>Hello, ${name}</h1>`)
})

app.get('/setname', (req, res)=> {
    res.cookie('name', 'stevie chicks');
    res.cookie('animal', 'harlequin shrimp');
    res.send(`<p>Cookie sent.</p>`)
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send(`<h1>Cookie signed.</h1>`)
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, ()=> {
    console.log('Server running on port 3000')
})