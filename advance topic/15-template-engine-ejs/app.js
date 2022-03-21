const express = require('express');
const res = require('express/lib/response');
const app = express();
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    const name = 'Absar'
    res.render('main', { name })
})

app.get('/profile', (req, res) => {
    const user = {
        name: 'Absar Ahmad',
        email: 'absar@test.com',
        country: 'Pakistan',
        skills: ['HTML 5', 'CSS 3', 'JAVASCRIPT', 'NODE JS', 'PHP', 'SQL','Java','C++','React','MERN']
    };
    res.render(`profile`, { user });
});

app.listen(8080, (err) => {
    if (!err) {
        console.log(`Server is Running at http://localhost:8080`);
    }
});
