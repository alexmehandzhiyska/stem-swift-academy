const db = require('../config/database');
const Course = require('../models/Course');
const Topic = require('../models/Topic');
const User = require('../models/User');

const getAll = async (userId) => {
    const courses = await User.findAll({ where: {id: userId}, include: [Course]})
    console.log(courses);
    // db.query(`SELECT * FROM topics WHERE course_id IN (SELECT course_id FROM users_courses WHERE user_id = ${userId})`);
}
const getOne = async (topicId) => {
    const topic = await Topic.findByPk(topicId);
    return topic.dataValues;
}

module.exports = { getAll, getOne };