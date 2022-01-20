const mongoose = require('mongoose')
const validator  = require('validator')
require('../db/mongoose')

const countSchema = new mongoose.Schema({    
    updatecount:{
        type:Number,
        default:0
    }
})

const count = mongoose.model('count',countSchema)

async function countinitialize(){
    try{
        const numb = await count.find({})
        console.log(numb)
        if(numb.length == 0){
            const add = new count({
                updatecount:0
            })
            await  add.save()
            console.log(add)
        }
        else{
            return
        }
    }
    catch(err){
        console.log(err)
    }
}
countinitialize()
module.exports = count