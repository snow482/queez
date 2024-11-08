const router = require('express').Router()
const { QuestionAnswers } = require('../db/models')

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params
      const data = QuestionAnswers.findOne({where: {id}})
      res.status(200).json(data)

    } catch(error) {
      res.status(500).json({message: error.message})
    }
  })

module.exports = router