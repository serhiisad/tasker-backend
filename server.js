const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.port || 5002;

let Record = require("./models/record");

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo Database connection established successfully!");
});

app.post("/docs", (req, res) => {
  const content = req.body.content;
  const newRecord = new Record({ content });
  newRecord
    .save()
    .then(result => res.json(result))
    .catch(err => res.status(400).send("Error: " + err));
});

app.get("/docs/:id", (req, res) => {
  Record.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(400).send("Error: " + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
