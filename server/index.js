const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')
const app = express()
app.use(cors())
app.use(express.json())

const port = 3001

app.get("/emissionbycountry1",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('SELECT * FROM emissionbycountry1')
        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
})

app.get("/emissionbycountry2",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('SELECT * FROM emissionbycountry2')
        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
})
app.listen(port)