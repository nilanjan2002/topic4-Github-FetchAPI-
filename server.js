const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const base = `${__dirname}/public`;
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(`${base}/main.html`);
});

app.get('/getrepo',(req,res)=>{
    res.sendFile(`${base}/repos.html`)
})
app.get('/getprofile',(req,res)=>{
    res.sendFile(`${base}/profile.html`)
})
app.get('/favicon.ico',(req,res)=>{
    res.sendFile(`${base}/favicon.ico`)
})
app.get('/app.js', (req, res) => {
    res.sendFile(`${base}/app.js`);
});

app.get('/style.css',(req,res)=>{
    res.sendFile(`${base}/style.css`)
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});