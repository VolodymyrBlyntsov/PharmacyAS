import express from "express"
import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pharmacy"
})

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello this is the backend!")
})

app.get("/drugs", (req, res) => {
    const q = "SELECT * FROM drugs"
    db.connect()
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/drugs", (req, res) => {
    const q = "INSERT INTO drugs (`title`, `desc`, `cover`) VALUES (?)"
    const values = [req.body.title,
                    req.body.desc,
                    req.body.cover]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Drug has been created successfully.")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})

