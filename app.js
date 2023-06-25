require('dotenv').config();
const moment = require('moment');
const express = require('express');
const app = express();
const animals = require('./models/animals');
const birds = require('./models/birds');
const nature=require('./models/nature');
const plants=require('./models/plants');
const config = require('./config.json');

const port = process.env.PORT || 5051;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const currentDate = moment().format('YYYY-MM-DDTHH:mm:ss');
    
    if (currentDate >= config.collectionDates.animals.startDate && currentDate <= config.collectionDates.animals.endDate) {
      const randomImages = await animals.aggregate([{ $sample: { size: 4 } }]).exec();
      res.render('index', { title: 'Random Images - Animals', animals: randomImages });
    } 
    else if (currentDate >= config.collectionDates.birds.startDate && currentDate <= config.collectionDates.birds.endDate) {
      // Load Birds collection
      const randomImages = await birds.aggregate([{ $sample: { size:4 }}]).exec();
      res.render('birds', { title: 'Random Images - birds', birds: randomImages });
    } 
    else if (currentDate >= config.collectionDates.plants.startDate && currentDate <= config.collectionDates.plants.endDate) {
      // Load plants collection
      const randomImages = await plants.aggregate([{ $sample : {size: 4}}]).exec();
      res.render('plants', { title: 'Random Images - plants', plants: randomImages });
    }
    else if (currentDate >= config.collectionDates.nature.startDate && currentDate <= config.collectionDates.nature.endDate) {
      // Load nature collection
      const randomImages = await nature.aggregate([{ $sample: { size:4 }}]).exec();;
      res.render('nature', { title: 'Random Images - Nature', nature: randomImages });
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