const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/RecordsTaskApi',{
    useNewUrlParser:true,
    useUnifiedTopology: true
    

}).then(
    console.log('connected')
).catch(err=>console.log(err))

// const User = mongoose.model('User',{
//     firstName:{
//         type:String
//     },
//     lastName:{
//         type:String
//     }
// })


// const me = new User({
//     firstName: 'kevin',
//     lastName:'Joseph'
    
// })

// me.save().then(()=>{
//     console.log(me);
// }).catch((error)=>{
//     console.log(error);
// })