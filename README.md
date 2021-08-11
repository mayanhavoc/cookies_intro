# Cookies
In the express docs, under 'Response', you'll find: 
![Source: Express docs - `res.cookie`]('/../res.cookie.png)

The way you send a cookie with express is as part of the `res` object with the `res.cookie` method which allows us to pass in a **name** and a **value**. 

```Javascript
app.get('/setname', (req, res)=> {
    res.cookie('name', 'stevie chicks');
    res.send(`<p>Cookie sent.</p>`)
})
```

![Sent cookie]('/../sent_cookie.png)
[Source: express docs](https://expressjs.com/en/5x/api.html#res.cookie)

Now, to access the information stored in the cookie, we need to access it through  `req.cookie` as express turns the data into an object contained in the request object. Unfortunately, express does not parse cookies out of the box, for that we can use `cookie-parser` => `npm install cookie-parser`.

[npm cookie-parser](https://www.npmjs.com/package/cookie-parser)

## Signing cookies
> Optionally you may enable *signed cookie* support by passing a `secret` string, which assigns `req.secret` so it may be used by other middleware.
![Source: npm - signed cookies]('./../signed_cookies.png)
