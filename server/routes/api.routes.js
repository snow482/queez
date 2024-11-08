const router = require('express').Router()
const apiThemeRouter = require('./api.theme.routes')
const apiQuestionsAnswersRouter = require('./api.questionsAnswer.routes')

router.use('/themes', apiThemeRouter)
router.use('/questions', apiQuestionsAnswersRouter)

module.exports = router