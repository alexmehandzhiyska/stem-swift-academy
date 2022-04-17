const { Op } = require('sequelize');
const Course = require('../models/Course');
const UserCourse = require('../models/UserCourse');
const Topic = require('../models/Topic');

const getAll = async (userId) => {
    const coursesData = await UserCourse.findAll({ where: { userId }, include: [Course]})
    const courseIds = coursesData.map(c => c.dataValues.course.dataValues.id);

    const topicsData = await Topic.findAll({ where: { courseId: { [Op.in]: courseIds } } });
    return topicsData.map(topic => topic.dataValues);
}
const getOne = async (topicId) => {
    const topic = await Topic.findByPk(topicId);
    return topic.dataValues;
}

module.exports = { getAll, getOne };