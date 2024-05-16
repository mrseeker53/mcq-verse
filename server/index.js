import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

// Create the server app using express method
const app = express();
// Use app to pass data as json format
app.use(express.json());
// Use app with cors to secure the server connection 
app.use(cors());



// Set the server listening port as 3030
app.listen(3030, ()=> {
    console.log("Running")
});