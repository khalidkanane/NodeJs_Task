var mongoose = require ('mongoose')
var schema = new mongoose.Schema({
    email : {
        type : String ,
        required : true ,
        unique : true 
    },
    firstname : {
        type : String ,
        required : true 
    },
    lastname  :{
        type : String ,
        required : true 
    
    },
    phone :{
        type : String ,
        default : ""
    }
})

var user = new mongoose.model('users',schema)
module.exports = user ; 
