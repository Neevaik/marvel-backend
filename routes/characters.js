const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

require('dotenv').config();

router.get('/', (req, res) => {
    res.json({ result: true })
})

router.get('/all', async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`)
        res.json({data:response.data})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;