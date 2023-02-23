import express from "express"
import mysql from "mysql"
import cors from "cors"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pharmacy"
})

const app = express()

app.use(express.json())
app.use(cors())

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

app.post("/drugs", (req, res) => {
    const q = "INSERT INTO drugs(`title`, `desc`, `price`, `cover`) VALUES (?)"
    const values = [req.body.title,
                    req.body.desc,
                    req.body.price,
                    req.body.cover]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Drug has been created successfully.")
    })
})

app.delete("/drugs/:id", (req, res) => {
    const drugId = req.params.id
    const q = "DELETE FROM drugs WHERE id = ?"

    db.query(q, [drugId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Drug has been deleted successfully.")
    })
})

app.put("/drugs/:id", (req, res) => {
    const drugId = req.params.id
    const q = "UPDATE drugs SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [...values, drugId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Drug has been updated successfully.")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})

