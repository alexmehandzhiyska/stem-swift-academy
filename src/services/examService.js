const moment = require('moment');
const models = require('../../models/index');
const Exam = require('../../models/index').Exam;
const UserExam = require('../../models/index').UserExam;
const UserCourse = require('../../models/index').UserCourse;

const { exec } = require("child_process");


const getAll = async (examType, subject) => {
    let exams = await Exam.findAll({ where: { type: examType, timed: false } });
    exams = subject ? exams.filter(exam => exam.subject == subject) : exams;
    return exams.map(exam => exam.dataValues);
}

const getOne = async (userId, examId) => {
    const examData = await Exam.findByPk(examId);
    const exam = examData.dataValues;

    if (exam.timed) {
        const userExamData = await UserExam.findOne({ where: { user_id: userId, exam_id: examId } });
        const userCourseData = await UserCourse.findOne({ where: { user_id: userId, course_id: exam.course_id } });

        if (!userCourseData) {
            throw new Error('You are not allowed to see this exam because you are not registered for the course!');
        }

        const currentTime = moment().format();
        const startTime = moment(exam.start_time).format();

        if(moment(currentTime).diff(startTime) < 0) {
            throw new Error('This exam has not started yet!');
        }
        
        const endTime = moment(startTime).add(exam.duration, 'm').format();
        const remainingTime = moment(endTime).diff(currentTime, 'miliseconds');

        if (remainingTime <= 0) {
            throw new Error('This exam has already ended!');
        }

        if (userExamData) {
            throw new Error('You have already submitted this exam. You are not allowed to solve it more than one time!');
        }

        exam.remainingTime = remainingTime;
    }

    return exam;
}

const createOne = async (examType, title, subject, section, instructions, duration, time, difficulty, link, text, questions_count) => {
    time = time ? time : null;
    const timed = time ? true : false;
    
    const exam = await Exam.create({ type: examType, title, subject, section, duration, timed, start_time: time, instructions, text, link, difficulty, questions_count });
    return exam.dataValues;
}

const updateOne = async (examId, examType, title, subject, section, instructions, duration, difficulty, link, text) => {
    const exam = await Exam.update({ examType, title, subject, section, duration, instructions, text, link, difficulty }, { where: { id: examId }, returning: true });
    return exam[1][0].dataValues;
}

const deleteOne = async (id) => {
    const result = await Exam.destroy({ where: { id: id } });
    return result;
}

const generateResultsCsv = async () => {
    const today = new Date();

    const allExamsData = await Exam.findAll();
    const allExams = allExamsData.map(exam => exam.dataValues);

    const todayExams = allExams
        .filter(exam => moment(exam.start_time).format('dd') == moment(today).format('dd') && moment(exam.start_time).format('MMM') == moment(today).format('MMM'))
        .map(exam => exam.id);

    const query = `COPY (SELECT user_id, exam_id, email, name, ceil(cast(score as decimal) / questions_count * 100) AS score_percent FROM user_exams JOIN users ON user_exams.user_id = users.id JOIN exams ON user_exams.exam_id = exams.id WHERE exam_id IN (${todayExams.join(', ')}) AND ceil(cast(score as decimal) / questions_count * 100) >= 70) TO '/users/alexandrinamehandzhiyska/Desktop/noit-final/exam-results.csv' DELIMITER ',' CSV HEADER;`;

    exec(`psql -c \"\\${query}\" \"postgresql://postgres:admin@localhost:5432/stemswiftacademy\"`, (a, b, c) => {
        console.log('success');
    });
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, generateResultsCsv };