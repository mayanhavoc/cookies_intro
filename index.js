const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get('/greet', (req, res) => {
    const { name = 'No-name'} = req.cookies;
    res.send(`<h1>Hello, ${name}</h1>`)

})

app.get('/setname', (req, res)=> {
    res.cookie('name', 'stevie chicks');
    res.send(`<p>Cookie sent.</p>`)
})

app.listen(3000, ()=> {
    console.log('Server running on port 3000')
})