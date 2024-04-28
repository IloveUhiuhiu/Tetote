module.exports = app => {
    const lessonController = require('../controllers/lesson.controller')

    app.route('/lesson')
        .get(lessonController.read)
    app.route('/lesson/:id')
        .get(lessonController.readById)
}