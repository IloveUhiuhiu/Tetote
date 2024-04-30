const Lesson = require('../service/lesson.service')

exports.read = async(req, res) => {
    const lesson = await Lesson.read();
    res.status(200).send(lesson)

}

exports.readById = async(req,res) => {
    const lesson = await Lesson.readById(req.params.id)
    res.status(200).send(lesson)
}