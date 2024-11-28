const express = require("express");
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");

app.use('/characters', charactersRoutes)
app.use('/comics', comicsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);;
})
