const {MongoClient,ObjectId} = require('mongodb')

const connectionUrl  = 'mongodb://127.0.0.1:27017'
const databaseName  = 'RecordsTask'

MongoClient.connect(connectionUrl,{useNewUrlParser:true,useUnifiedTopology: true },(error,client)=>{
   if(error){
    return console.log(error);
   }else{
    const db = client.db(databaseName) // it will create a new one or refer to a existing one
    console.log('connected')
//     db.collection('records').insertOne({
//         'firstname':"kevin",
//         'lastname':"joseph"
//     })
   }
  
})