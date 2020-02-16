const express = require("express");

const app = express();
const port = process.env.port || 5002;

// app.use(bodyParser.json());
app.use(express.json());

app.get("/hello-world", (req, res) => {
  res.json({"message": "Hello World"});
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
