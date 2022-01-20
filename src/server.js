const express = require('express')
const app = express()

const cors = require('cors')
const port = 3001
const records = require('./routes/recordList')
require('./db/mongoose')
app.use(cors())

app.use(express.json())


app.use(records)
app.listen(port,()=>{
    console.log('server runing at port'+port)
})