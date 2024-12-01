const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

require('dotenv').config();


router.get('/all', async (req, res) => {
    try {
        let limit = 100;
        let filters = "";

        if (req.query.name) {
            filters += `&name=${req.query.name}`
        }

        if (req.query.limit) {
            limit = req.query.limit
        }

        if (req.query.page) {
            filters += `&skip=${(req.query.page - 1) * limit}`
        }
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}${filters}&limit=${limit}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;