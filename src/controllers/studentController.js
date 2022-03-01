const router = require('express').Router();
const studentService = require('../services/studentService');

const getOne = async (req, res) => {
  const userId = req.params.studentId;

  try {
    const result = await studentService.getOne(userId);

    res.status(200).json({
      status: 'success',
      data: {
        exams: result.exams,
        totalQuestions: result.questions
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
}

router.get('/:studentId', getOne)

module.exports = router;