const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client/public'))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log("server listening on port", PORT, "\nhttps://localhost:" + PORT)
);
