const express = require("express");
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

const charactersRoutes = require("./routes/characters");

app.use('/characters', charactersRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);;
})
