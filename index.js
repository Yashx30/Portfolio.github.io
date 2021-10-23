const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mongoose = require('mongoose');

// main().catch(err => console.log(err));






mongoose.connect('mongodb://localhost/portfolio');



const port = 3000
const path = require('path');
const { stringify } = require('querystring');
app.use(bodyparser.urlencoded({ extended: true }))

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
//     // res.send('hello World')


// })

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.urlencoded())

app.set('views', path.join(__dirname, 'views'));


app.engine('html', require('ejs').renderFile);
// app.set('view engine','pug')
app.get('/', (req, res) => {

    res.sendFile('views/index.html', { root: __dirname })

})


// app.use(express.static(path.join(__dirname,'public')))
// res.sendFile(path.join(__dirname,'/public/index.html'))
// app.post('/', (req, res) => {
//     const obj = JSON.parse(JSON.stringify(req.body));
//     console.log(obj)
//     // const params={'message':'Your form has been submited'}
//     res.render('index.html', { title: 'data saved' })

// })
var portfolioSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    proj: String


});

var user = mongoose.model('user', portfolioSchema)
app.post('/', (req, res) => {
    var mydata = new user(req.body)
    mydata.save().then(() => {
        // res.send("Your query has been send succesfully")
        // console.log("data saved")
        res.send("Your query has been sent succesfully")
    }).catch(() => {
        res.status(400).send("Error 404")
    })
    // res.render('index.html')
  

})
app.listen(port, () => {
    console.log(`Website is  listening at http://localhost:${port}`)
  })
  
