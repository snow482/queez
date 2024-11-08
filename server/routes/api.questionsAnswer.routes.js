const router = require('express').Router()
const { QuestionAnswers } = require('../db/models')

router.route(':id')
  .get(async (req, res) => {
    try {
      const { id } = req.params
      const { questions } = req.body
      
    } catch(error) {
      res.status(500).json({message: error.message})
    }


  })