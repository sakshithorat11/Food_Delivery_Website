const mongoose=require('mongoose')


const {Schema}=mongoose;
const UserSchema =new Schema({
    // name:
    // {
    //     typeof:String,
    //       requestAnimationFrame:true
    // },
    // email:
    // {
    //     typeof:String,
    //   //  require:true
         
    // },
    // password:
    // {
    //     typeof:String,
    //     //require:true
    // },
    // location:
    // {
    //     typeof:String,
    //     //require:true
    // }
    // ,
    // date:{
    //     typeof:Date,
    //   // default:Date.now
    // }
    name:String,
    email:String,
    password:String,
    location:String,
    date:Date
})

module.exports=mongoose.model('user',UserSchema);