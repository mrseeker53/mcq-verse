import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

// Create the server app using express method
const app = express();
// Use app to pass data as json format
app.use(express.json());
// Use app with cors to secure the server connection 
app.use(cors());


// Create mysql database connection 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});


// Read data
app.get('/', (req, res) => {
    const sql = "SELECT * FROM book";
    db.query(sql, (err, data) => {
        if(err) {
            return res.json({Error: "Error"});
        }
        return res.json(data);
    })
})


// Create data
app.post('/add', (req, res) => {
    const sql = "INSERT INTO mcq (question, option1, option2, option3, option4, ans) VALUES (?)";
    const values = [
        req.body.question,
        req.body.option1,
        req.body.option2,
        req.body.option3,
        req.body.option4,
        req.body.ans
    ]
    db.query(sql,[values], (err, data) => {
        if(err) {
            return res.json({Error: "Error"});
        }
        return res.json(data);
    })
})


// Update data
app.put('/update/:id', (req, res) => {
    const sql = "update book set publisher = ?, name = ?, date = ?, where id = ?";
    const values = [
        req.body.publisher,
        req.body.name,
        req.body.date
    ]
    const id = req.params.id;
    db.query(sql,[...values, id], (err, data) => {
        if(err) {
            return res.json({Error: "Error"});
        }
        return res.json(data);
    })
})


// Delete data
app.delete('/delete/:id', (req, res) => {
    const sql = "delete from book where id = ?";
    const id = req.params.id;
    db.query(sql,[...values, id], (err, data) => {
        if(err) {
            return res.json({Error: "Error"});
        }
        return res.json(data);
    })
})



// Set the server listening port as 3030
app.listen(3030, ()=> {
    console.log("Running")
});