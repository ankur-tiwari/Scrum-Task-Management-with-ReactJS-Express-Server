const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports=()=>{
	mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb://emre:deneme123@ds117200.mlab.com:17200/deneme',{ useNewUrlParser: true });
    //mongoose.connect('mongodb://localhost:27017');
    mongoose.connection.on('open',()=>{
        console.log('Connection OK');
    })
    mongoose.connection.on('error',(err)=>{
        console.log('Connection Fail',err);
    })
}