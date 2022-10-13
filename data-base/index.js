const mongoose = require('mongoose');
mongoose
/*mongoose.connect('mongodb://localhost:27017/jueves');
mongoose
let test =new OPromise((resolve,reject)=>{
    setTimeout(() => {
        resolve("done")
    }, timeout);
})*/
.connect('mongodb://localhost:27017/jueves')
 .then((result)=>{
    console.log("Conectado a mongo");
 })
 .catch((error)=>{
    console.log("ERROR");
 })

 const scoreSchema = new mongoose.Schema({
    rank:Number,
    name:String,
    score:Number,
 })

 const score = mongoose.model('Score', scoreSchema)

 module.exports = {
   ScoresFind: () => Score.find()
 }
 
 /*
 const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    date:Date,
    isFinished:Boolean,
 })

 const task = mongoose.model('Task',taskSchema);

 const tarea1 = new task({
    title:"Prueba",
    description:"Tarea de prueba",
    date:new Date(),
    isFinished:false,
 });

tarea1.save().then(result =>{
    console.log("SAVE",result);
}).catch(error =>{
    console.log("ERROR",error);
})
let tasks=[]
*/