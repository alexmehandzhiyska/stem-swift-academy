const router = require('express').Router();
const schedule = require('node-schedule');
const models = require('../../models/index');

const examService = require('../services/examService');
const questionService = require('../services/questionService');

const getAll = async(req, res) => {
    const examType = req.params.examType;
    const subject = req.query.subject;

    try {
        const exams = await examService.getAll(examType, subject);

        res.status(200).json(exams);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const getOne = async(req, res) => {
    const userId = req.user.user;
    const examId = req.params.examId;

    try {
        const exam = await examService.getOne(userId, examId);

        res.status(200).json(exam);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createOne = async(req, res) => {
    const { type, title, subject, section, instructions, duration, time, difficulty, link, text, questions } = req.body;

    try {
        console.log(questions);
        const exam = await examService.createOne(type, title, subject, section, instructions, duration, time, difficulty, link, text, Object.keys(questions).length);
        await questionService.addQuestions(exam.id, Object.values(questions), type);

        res.status(201).json(exam);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateOne = async(req, res) => {
    const examId = req.params.examId;
    const { type, title, subject, section, instructions, duration, difficulty, link, text, questions } = req.body;

    try {
        const exam = await examService.updateOne(examId, type, title, subject, section, instructions, duration, difficulty, link, text);
        const result = await questionService.updateQuestions(exam.id, Object.values(questions), subject);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteOne = async(req, res) => {
    const examId = req.params.examId;

    try {
        await examService.deleteOne(examId);
        res.status(200).json({ status: 'success' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getQuestions = async(req, res) => {
    const examId = req.params.examId;
    const shuffled = req.query.shuffled;

    try {
        const questions = await questionService.getAll(examId, shuffled);

        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const submitAnswers = async(req, res) => {
    const userId = req.user.user;
    const examId = req.params.examId;
    const userAnswers = req.body;

    try {
        const score = await questionService.calculateScore(examId, userId, userAnswers);

        res.status(201).json(score)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getScore = async(req, res) => {
    const userId = req.user.user;
    const examId = req.params.examId;

    try {
        const score = await questionService.getScore(userId, examId);

        res.status(200).json(score);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const generateResultsCsv = () => {
    models.sequelize.query("COPY (SELECT * FROM User) TO '/tmp/test.csv' DELIMITER ',' CSV HEADER;")
    // sequelize.query("COPY (SELECT user_id, exam_id, email, name, ceil(cast(score as decimal)÷ / questions_count * 100) AS score_percent FROM user_exams JOIN users ON user_exams.user_id = users.id JOIN exams ON user_exams.exam_id = exams.id where ceil(cast(score as decimal) / questions_count * 100) >= 80) TO '/Users/alexandrinamehandzhiyska/Desktop/noit-final/exam-results.csv' DELIMITER ',' CSV HEADER;");
    return 'success';
}

schedule.scheduleJob('0 12 * * * *', () => {
    generateResultsCsv();
});

router.post('/', createOne);
router.get('/:examType', getAll);
router.get('/:examType/:examId', getOne);
router.put('/:examType/:examId', updateOne);
router.delete('/:examType/:examId', deleteOne);
router.get('/:examType/:examId/questions', getQuestions);
router.post('/:examType/:examId/questions', submitAnswers);
router.get('/:examType/:examId/results', getScore);

module.exports = router;