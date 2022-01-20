const express = require('express')
const router = new express.Router()
const Records = require('../models/recordList')
const Count = require('../models/count')


// endpoint used to add new records
router.post('/addRecord',async(req,res)=>{
    const data= JSON.stringify(req.body)
    
    const recordList = new Records({
        ...req.body
    }) 
    try{
        await recordList.save()
        const calledcount = await Count.find({})
       
       // a count schema is created and incremented  every time we add new records
        const couter = await Count.findByIdAndUpdate(calledcount[0]._id,{lastname:req.body.lastname,$inc : {'updatecount' : 1}},{new:true,runValidators:true})
        if(!couter){
            return
        }else{
            console.log(couter)
        }
        res.status(201).send('documented created')
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})



// endpoint used to get all records
router.get('/getAllRecords',async(req,res)=>{
    try{
        const recorsList = await Records.find({})
        res.send(recorsList)
    }
    catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
})



// endpoint used to update the lastname based on the document id

router.patch('/updateRecords',async(req,res)=>{
    try{
        console.log(req.body)
        const user = await Records.findByIdAndUpdate(req.body.id,{lastname:req.body.lastname,$inc : {'updatecount' : 1}},{new:true,runValidators:true})
        
        if(!user){
            return res.status(404).send('notfound')
        }
        res.send('found and updated')
    }catch(err){
        console.log(err)
        return res.status(500).send(error)
    }
})




// endpoint is used to get the count of how many times that the add endpiont has been triggred
router.get('/getCouterForAdd',async(req,res)=>{
    try{
        const getCounter = await Count.find({})
        return res.status(200).send(getCounter)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})

module.exports = router