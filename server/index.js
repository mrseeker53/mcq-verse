import express from "express";
import mysql from "mysql";
import cors from "cors";

// Create the server app using express method
const app = express();
const port = 3030;

// Middlewares
// Parse JSON bodies
app.use(express.json());
// Secure the server connection
app.use(cors());

// Mysql connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Read: Route to handle displaying for all data
app.get("/", (req, res) => {
  const sql = "SELECT * FROM mcq";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.json({ Error: "Error selecting data" });
    }
    return res.json({ Message: "Data selected successfully", data });
  });
});

// Create: Route to handle form data submission
app.post("/addquestion", (req, res) => {
  const sql =
    "INSERT INTO mcq (question, option1, option2, option3, option4, ans, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.question,
    req.body.option1,
    req.body.option2,
    req.body.option3,
    req.body.option4,
    req.body.ans,
    req.body.created_at,
    req.body.updated_at // Set updated_at to the same value as created_at
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ Error: "Error inserting data", Details: err.message });
    }
    const insertedId = result.insertId;
    const selectSql = "SELECT * FROM mcq WHERE id = ?";
    db.query(selectSql, [insertedId], (err, data) => {
      if (err) {
        console.error(err);
        return res.json({ Error: "Error retrieving inserted data", Details: err.message });
      }
      return res.status(200).json({ Message: "Data inserted successfully", data: data[0] });
    });
  });
});


// Update: Route to handle updating for data with id
app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE mcq SET question = ?, option1 = ?, option2 = ?, option3 = ?, option4 = ?, ans = ?, updated_at = ? WHERE id = ?";
  const values = [
    req.body.question,
    req.body.option1,
    req.body.option2,
    req.body.option3,
    req.body.option4,
    req.body.ans,
    req.body.updated_at
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      console.error(err);
      return res.json({ Error: "Error updating data" });
    }
    return res.status(200).json({ Message: "Data updated successfully", data });
  });
});

// Delete: Route to handle deleting for data with id
app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM mcq WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error deleting data" });
    }
    if (data.affectedRows === 0) {
      return res.status(404).json({ error: "Question not found" });
    }
    return res.status(200).json({ message: "Data deleted successfully", data });
  });
});

// Search: Route to handle searching for data with a date range
app.get("/search", (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  
  // Construct SQL query to search questions by date range
  const sql = "SELECT * FROM mcq WHERE created_at BETWEEN ? AND ?";
  const values = [startDate, endDate];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error searching questions by date range" });
    }
    return res.status(200).json({ message: "Questions searched successfully by date range", data });
  });
});


// Set the server listening port as 3030
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
