const { Op } = require('sequelize');
const Exam = require('../../models/index').Exam;
const User = require('../../models/index').User;
const Question = require('../../models/index').Question;
const UserExam = require('../../models/index').UserExam;

const getAll = async (role) => {
    const usersData = role == 'all' ? await User.findAll() : await User.findAll({ where: { role } });
    return usersData.map(user => user.dataValues);
}

const getOne = async (userId) => {
    const userData = await User.findByPk(userId);
    return userData.dataValues;
}

const getUserExams = async (userId) => {
    const userExamsData = await UserExam.findAll({ where: { user_id: userId }});
    const userExamIds = userExamsData.map(exam => exam.dataValues.exam_id);
    let exams = [];

    userExamsData.forEach(userExam => {
        Exam.findByPk(userExam.dataValues.exam_id)
            .then(examData => {
                const exam = examData.dataValues;
                exam.score = userExam.score;
                exams.push(exam);
            });
    });

    const questionsData = await Question.findAll({ where: { exam_id: { [Op.in]: userExamIds } } });
    const questions = questionsData.map(question => question.dataValues);

    return { exams, questions };
}

const updateUsers = async(users) => {
    let result = [];

    for (const user of users) {
        const currentUserData = await User.update({ role: user.role }, { where: { id: user.id }, returning: true });
        const currentUser = currentUserData[1][0].dataValues;
        result.push(currentUser);
    }

    return result;
}

module.exports = { getAll, getOne, getUserExams, updateUsers };