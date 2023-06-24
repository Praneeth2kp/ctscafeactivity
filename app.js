require('dotenv').config();
const express=require('express');
// const expressLayouts=require('express-ejs-layouts');
const app=express();
const animals = require('./models/animals');

const port=process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
// app.use(expressLayouts);

// app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.get('/', async (req, res) => {
    try {
      const randomImages = await animals.aggregate([{ $sample: { size: 4 } }]).exec();
      res.render('index', { title: 'Random Images', Animals: randomImages }); // Update the variable name to Animals
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  
const routes=require('./routes/birdsRoute.js')

app.use('/',routes);


app.listen(port)