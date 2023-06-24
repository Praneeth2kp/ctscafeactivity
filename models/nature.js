const mongoose=require('mongoose');

const natureSchema=new mongoose.Schema({
    name:{
        type: String,
        required:'This field is Required.'
    },
    image:{
        type: String,
        required:'This field is Required.'
    }

});

module.exports=mongoose.model('nature', natureSchema);