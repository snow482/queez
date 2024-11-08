const router = require('express').Router()
const { QuestionsAnswers } = require('../db/models')

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params
      console.log(req.params);
      
      const data = await QuestionsAnswers.findOne({where:{id}})
      res.status(200).json(data)

    } catch(error) {
      res.status(500).json({message: error.message})
    }
  })
  
  router.route('/')
  .get(async (req, res) => {
    try {
      const data = await QuestionsAnswers.findAll()
      res.status(200).json(data)

    } catch(error) {
      res.status(500).json({message: error.message})
    }
  })




module.exports = router
