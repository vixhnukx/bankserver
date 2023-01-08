// import data service file from folder 
const dataservice=require ('./service/dataService')

// import jsonwebtoken
const jwt=require("jsonwebtoken")



// import express
const express=require('express')
const { json } = require('express')

// create app

const app=express()

// to convert json datas

app.use(express.json())


//middleware for varify the token

const jwtmiddleware=(req,res,next)=>{

    console.log("......router specific middleware......");
    try{
        const token=req.headers['access-token']
    const data=jwt.verify(token,"secretkey123")
    console.log(data);
    next()
    }
   
    catch{

       res.status(422).json({
            statusCode:422,
        staus:false,
        message:"plese login"
        })
    }
}


// request


// register

app.post('/register',(req,res)=>{

    const result=dataservice.register(req.body.acno,req.body.uname,req.body.psw)

    res.status(result.statusCode).json(result)
     
       
})


// login

app.post('/login',(req,res)=>{

    const result=dataservice.login(req.body.acno,req.body.psw)

    res.status(result.statusCode).json(result)
     
       
})

// deposit

app.post('/deposit',jwtmiddleware,(req,res)=>{

    const result=dataservice.deposit(req.body.acno,req.body.psw,req.body.amount)

    res.status(result.statusCode).json(result)
     
       
})
// withdraw
app.post('/withdraw',jwtmiddleware,(req,res)=>{

    const result=dataservice.withdraw(req.body.acno,req.body.psw,req.body.amount)

    res.status(result.statusCode).json(result)
     
       
})
// traansaction history
app.post('/gettransaction',jwtmiddleware,(req,res)=>{

    const result=dataservice.gettransaction(req.body.acno)

    res.status(result.statusCode).json(result)
     
       
})
// delete

// GET

// app.get('/',(req,res)=>{
//     res.send('GET methord checking')
// })

// // POST
// app.post('/',(req,res)=>{
//     res.send('post methord checking')
// })

// // PUT
// app.put('/',(req,res)=>{
//     res.send('put methord checking')
// })

// // PATCH
// app.patch('/',(req,res)=>{
//     res.send('patch methord checking')
// })

// // DELETE
// app.delete('/',(req,res)=>{
//     res.send('dlt methord checking')
// })

// set port

app.listen(3000,()=>{
    console.log("server started at port no 3000");
})