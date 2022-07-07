const express = require("express");
const { default: cnx } = require("./src/config");

require("dotenv/config");
const app = express();
cnx.sync();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => console.log(`App listen on port ${PORT}`));
