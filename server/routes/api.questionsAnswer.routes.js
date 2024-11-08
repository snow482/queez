const router = require('express').Router()
const { QuestionsAnswers } = require('../db/models')

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params
      console.log(req.params);
      
      const data = await QuestionsAnswers.findByPk(Number(id))
      res.status(200).json(data)

    } catch(error) {
      res.status(500).json({message: error.message})
    }
  })

module.exports = router
