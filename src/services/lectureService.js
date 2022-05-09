const { Op } = require('sequelize');
const UserCourse = require('../../models/index').UserCourse;
const Topic = require('../../models/index').Topic;

const getAll = async (userId) => {
    const userCoursesData = await UserCourse.findAll({ where: { user_id: userId }});
    const courseIds = userCoursesData.map(userCourse => userCourse.dataValues.course_id);

    const topicsData = await Topic.findAll({ where: { course_id: { [Op.in]: courseIds } } });
    return topicsData.map(topic => topic.dataValues);
}
const getOne = async (topicId) => {
    const topic = await Topic.findByPk(topicId);
    return topic.dataValues;
}

module.exports = { getAll, getOne };