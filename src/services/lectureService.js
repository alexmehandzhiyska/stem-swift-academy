const { Op } = require('sequelize');
const UserCourse = require('../../models/index').UserCourse;
const Topic = require('../../models/index').Topic;
const Course = require('../../models/index').Course;

const getAll = async (userId) => {
    const userCoursesData = await UserCourse.findAll({ where: { user_id: userId }});
    const courseIds = userCoursesData.map(userCourse => userCourse.dataValues.course_id);

    const topicsData = await Topic.findAll({ where: { course_id: { [Op.in]: courseIds } } });
    return topicsData.map(topic => topic.dataValues);
}
const getOne = async (userId, topicId) => {
    const topic = await Topic.findByPk(topicId);

    const courseId = topic.dataValues.course_id;
    const userCourseData = await UserCourse.findOne({ where: { user_id: userId, course_id: courseId } });

    if (!userCourseData) {
        throw new Error('You are not registered for this course!');
    }

    return topic.dataValues;
}

module.exports = { getAll, getOne };