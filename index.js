require('dotenv').config()
import express from 'express';
const app = express()


app.get( "/", (req, res) => {
    res.send("<h1> Welcome to the Home page.</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1> Welcome to the login page.</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}.`);
})