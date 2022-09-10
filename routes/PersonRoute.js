const express=require('express')
const person = require('../models/Person');
const personRoute=express.Router()
//get all person

personRoute.get('/',async(req,res)=>{
    try {let result=await person.find()
        res.send({persons:result,msg:'get all person'})
    
        
    } catch (error) {
        res.status(400).send({msg:'cant not get all person'})
       console.log(error) 
    }
})
//get person by id
personRoute.get(
    '/:id',async(req,res)=>{
        try {
            let result=await person.findById(req.params.id)
            res.send({persons:result,msg:'person found'})
            
        } catch (error) {
            res.status(400).send({msg:'person not found'})
           console.log(error) 
        }
    }
)

// post a new person
personRoute.post(
    '/add',async(req,res)=>{
        try {let newperson=new person(req.body)
            let result =await newperson.save()
            res.send({persons:result, msg:'added person successfully'})
            
        } catch (error) {
            res.status(400).send({msg:'error saving person'})
           console.log(error) 
        }
    }
)

//delete person 
personRoute.delete('/delete/:id',async(req,res)=>{
    try {await person.findByIdAndDelete(req.params.id)
        res.send({msg:'delete person successfully'})
    } catch (error) {
        res.status(400).send({msg:'error deleting person'})
       console.log(error) 
    }
})

//update person
personRoute.put(
    '/put/:id',async(req,res)=>{
        try {let result=await person.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
        res.send({persons:result,msg:'updated successfully'})
            
        } catch (error) {
            res.status(400).send({msg:'error updating person'})
            console.log(error)
        }
    }
)
module.exports=personRoute