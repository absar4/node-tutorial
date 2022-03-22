const express = require('express');
const app = express();
const middleware = require('./middleware');
const route = express.Router();

route.use(middleware.reqFilter)

route.get('', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});


app.listen(8000, (err) => {
    if (!err) {
        console.log(`Example app listening at http://localhost:8000`);
    }
});

app.use('/', route)