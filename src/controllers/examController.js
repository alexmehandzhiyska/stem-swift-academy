const router = require('express').Router();
const examService = require('../services/examService');
const questionService = require('../services/questionService');

const getAll = async(req, res) => {
    const subject = req.params.subject;

    try {
        const result = await examService.getAll(subject);
        const exams = result.rows;

        res.status(200).json({
            status: 'success',
            results: exams.length,
            data: {
                exams: exams
            }
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getOne = async(req, res) => {
    const examId = req.params.examId;

    try {
        const result = await examService.getOne(examId);

        res.status(200).json({
            status: 'success',
            data: {
                exam: result.rows[0]
            }
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}


const createOne = async(req, res) => {
    const { subject, section, instructions, duration, difficulty, link, text, questions } = req.body;

    try {
        const exam = await examService.createOne(subject, section, instructions, duration, difficulty, text, link);
        const result = await questionService.addQuestions(exam.id, Object.values(questions));

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateOne = async(req, res) => {
    const examId = req.params.examId;
    const { subject, section, instructions, duration, difficulty, link, text, questions } = req.body;

    try {
        const exam = await examService.updateOne(examId, subject, section, instructions, duration, difficulty, text, link);
        const result = await questionService.updateQuestions(exam.id, Object.values(questions));

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
        console.log(error);
        res.status(400).json(error.message);
    }
}

const getQuestions = async(req, res) => {
    const examId = req.params.examId;
    const shuffled = req.query.shuffled;

    try {
        const result = await questionService.getAll(examId, shuffled);

        res.status(200).json({
            status: 'success',
            results: result.length,
            data: {
                questions: result
            }
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const submitAnswers = async(req, res) => {
    const userId = req.user.user;
    const examId = req.params.examId;
    const { userAnswers } = req.body;

    try {
        const score = await questionService.calculateScore(examId, userId, userAnswers);

        res.status(201).json({
            status: 'success',
            data: {
                score
            }
        })
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getScore = async(req, res) => {
    const userId = req.user.user;
    const examId = req.params.examId;

    try {
        const score = await questionService.getScore(userId, examId);

        res.status(200).json({
            status: 'success',
            data: { score }
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

router.post('/', createOne);
router.get('/:subject', getAll);
router.get('/:subject/:examId', getOne);
router.put('/:subject/:examId', updateOne);
router.delete('/:subject/:examId', deleteOne);
router.get('/:subject/:examId/questions', getQuestions);
router.post('/:subject/:examId/questions', submitAnswers);
router.get('/:subject/:examId/results', getScore);

module.exports = router;