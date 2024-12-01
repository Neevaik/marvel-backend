const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

require('dotenv').config();

router.get("/", async (req, res) => {
    try {
      let limit = 100;
  
      let filters = "";
      if (req.query.title) {
  
        filters += `&title=${req.query.title}`;
      }
      if (req.query.limit) {
        limit = req.query.limit;
      }
      if (req.query.page) {
        filters += `&skip=${(req.query.page - 1) * limit}`;
      }
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}${filters}&limit=${limit}`
      );
  
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });


router.get("/character-detail/:characterId", async (req, res) => {
  try {
      const response = await axios.get(
          "https://lereacteur-marvel-api.herokuapp.com/comics/" +
          req.params.characterId +
          "?apiKey=" +
          process.env.API_KEY
      );
      return res.status(200).json({results:response.data});
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
});

router.get("/comic-detail/:comicId", async (req, res) => {
  try {
      const response = await axios.get(
          "https://lereacteur-marvel-api.herokuapp.com/comic/" +
          req.params.comicId +
          "?apiKey=" +
          process.env.API_KEY
      );
      return res.status(200).json({results:[response.data]});
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
});

module.exports = router;