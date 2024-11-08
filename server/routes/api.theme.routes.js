const router = require('express').Router()
const { Theme, QuestionsAnswers } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    try {
      const allThemes = await Theme.findAll()
      res.json(allThemes)
    } catch(error) {
      res.status(500).json({message: error.message})
    }
  })

  router.route('/:theme_id')
    .get( async (req, res) => {
      try {
        const { theme_id } = req.params
        //console.log(req.params);
        
        const questions = await QuestionsAnswers.findAll({where: {theme_id:Number(theme_id)}})
        res.status(200).json(questions)
      } catch(error) {
        res.status(500).json({message: error.message})
      }
    })

module.exports = router
  

