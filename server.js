const PORT = process.env.port || 1337;

const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
