const router = require('express').Router()
const apiThemeRouter = require('./api.theme.routes')
const apiQuestionsAnswersRouter = require('./api.questionsAnswer.routes')

router.use('/theme', apiThemeRouter)
router.use('/questionsAnswers', apiQuestionsAnswersRouter)

module.exports = router