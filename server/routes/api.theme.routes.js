const router = require('express').Router()
const { Theme } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    try {
      const allThemes = await Theme.findAll()
      res.json(allThemes)
    } catch(error) {
      res.status(500).json({message: error.message})
    }
  })

  module.exports = router

