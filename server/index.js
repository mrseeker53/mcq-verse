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


// Set the server listening port as 3030
app.listen(3030, ()=> {
    console.log("Running")
});