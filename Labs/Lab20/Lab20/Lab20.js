const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars').create({extname: '.hbs', helpers: require('./views/helpers/reject')});

const DB = require('./models/note')

app.engine('.hbs', exphbs.engine);
app.set('view engine', '.hbs');
app.use('/static',express.static(__dirname + '/views/static'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('main.hbs', {
      layout:null,
      notes: DB.GetAll(),
      add_btn: true,
      disabled: false,
      upd: false
    })
  console.log(DB.GetAll());
  })
app.get('/update', (req, res)=>{
  res.render('main.hbs', {
    layout:null,
    notes: DB.GetAll(),
    disabled: true,
    upd: true,
    add: false
  })
})
app.get('/add', (req, res)=>{
  res.render('main.hbs', {
    layout:null,
    notes: DB.GetAll(),
    disabled: true,
    upd: false,
    add: true
  })
})
app.post('/add', (req, res) => {
  DB.Add({name: req.body.name, number: req.body.number})
  res.render('main.hbs', {
    layout:null,
    notes: DB.GetAll(),
    add_btn: true,
    disabled: false,
    upd: false,
    add: true
  })
})
app.post('/update', (req, res)=> {
  DB.Update({name:req.body.name, number: req.body.number})
  res.render('main.hbs', {
    layout:null,
    notes: DB.GetAll(),
    add_btn: true,
    disabled: false,
    upd: false,
    add: true
  })
})
app.post('/delete', (req, res) => {
  DB.Delete(req.body.name)
  res.render('main.hbs', {
    layout:null,
    notes: DB.GetAll(),
    add_btn: true,
    disabled: false,
    upd: false,
    add: true

  })
})

app.listen(3000)