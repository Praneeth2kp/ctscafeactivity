require('dotenv').config();
const moment = require('moment');
const express = require('express');
const app = express();
const animals = require('./models/animals');
const birds = require('./models/birds');
const config = require('./config.json');

const port = process.env.PORT || 5051;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const currentDate = moment().format('YYYY-MM-DD');
    
    if (currentDate >= config.collectionDates.animals.startDate && currentDate <= config.collectionDates.animals.endDate) {
      const randomImages = await animals.aggregate([{ $sample: { size: 4 } }]).exec();
      res.render('index', { title: 'Random Images - Animals', Animals: randomImages });
    } 
    else if (currentDate >= config.collectionDates.birds.startDate && currentDate <= config.collectionDates.birds.endDate) {
      // Load plants collection
      const randomImages = await birds.aggregate([{ $sample: { size:4 }}]).exec();
      res.render('birds', { title: 'Random Images - birds', birds: randomImages });
    } 
    else if (currentDate >= config.collectionDates.plants.startDate && currentDate <= config.collectionDates.plants.endDate) {
      // Load birds collection
      // const randomImages = ...
      // res.render('index', { title: 'Random Images - Birds', Animals: randomImages });
    } else if (currentDate >= config.collectionDates.nature.startDate && currentDate <= config.collectionDates.nature.endDate) {
      // Load nature collection
    //   const randomImages = ...;
    //   res.render('index', { title: 'Random Images - Nature', Animals: randomImages });
    } else {
     res.status(404).send('No collection active today');
   } 
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

const routes = require('./routes/birdsRoute.js');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
