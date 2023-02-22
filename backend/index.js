import express from "express"
import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AS",
    database: "pharmacy"
})

const app = express()

app.listen(8880, () => {
    console.log("Connected to backend!")
})

