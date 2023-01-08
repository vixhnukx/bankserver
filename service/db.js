// server mongodb integration

// 1.import mongoose

const mongoose=require('mongoose')

// 2.state connection string via mongoose

mongoose.Connection('mongodb://localhost:27017/bankServer',{useNewUrlParser:true})

// 3.define a bank database model

const User=mongoose.model('User',{
    acno: Number,
    username: String,
    password: Number,
    balance: Number, 
    trnsaction: []
})

// 4.export scheme to use in another files

 module.exports={
    User
 }