require('dotenv').config()
const express = require("express")
const app = express()
const port = 4000

app.get( "/", (req, res) => {
    res.send("<h1> Welcome to the Home page.</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1> Welcome to the login page.</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}.`);
})