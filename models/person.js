
const mongoose =require('mongoose')
const schema=mongoose.Schema
const personschema=new schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    favoritesFoods:{type:[String]}
})
const Person =mongoose.model('Person',personschema)
module.exports = Person