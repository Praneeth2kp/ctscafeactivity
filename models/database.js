const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb+srv://balaji152:balaji152@cluster0.nxp1t75.mongodb.net/Adload?retryWrites=true&w=majority' ,{ useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('connected')
});

// models

require('./plants')
require('./animals')
require('./nature')
require('./birds')