const mongoose = require('mongoose')
const validator  = require('validator')

const recordsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
        
    },
    lastname:{
       type:String,
       trim:true
      
    },
    updatecount:{
        type:Number,
        default:0
    }
})

const records = mongoose.model('records',recordsSchema)

module.exports = records