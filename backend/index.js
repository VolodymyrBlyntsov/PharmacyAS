import express from "express"
import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AS",
    database: "pharmacy"
})

const app = express()

app.get("/", (req, res) => {
    res.json("Hello this is the backend!")
})

app.get("/drugs", (req, res) => {
    const q = "SELECT * FROM drugs"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8880, () => {
    console.log("Connected to backend!")
})

