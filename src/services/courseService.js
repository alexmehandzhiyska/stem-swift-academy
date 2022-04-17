const Course = require('../../models/index').Course;
const UserCourse = require('../../models/index').UserCourse;
const nodemailer = require('nodemailer');
const Topic = require('../../models/index').Topic;
const User = require('../../models/index').User;

const getAll = async (userId) => {
  if (!userId) {
    const data = await Course.findAll();
    
    return data.map(course => course.dataValues);
  }

  const data = await UserCourse.findAll({ where: { user_id: userId } });
  const courseIds = data.map(entry => entry.dataValues.course_id);
  return courseIds;
}

const getOne = async (courseId) => {
  const course = await Course.findByPk(courseId);
  const topics = await Topic.findAll({ where: { course_id: courseId } });
  const result = { course: {...course.dataValues, topics: topics.map(topic => topic.dataValues)}};
  return result;
}

const registerUser = async (courseId, userId) => {
  const result = await UserCourse.create({ user_id: userId, course_id: courseId });
  const user = await User.findByPk(userId);
  const course = await Course.findByPk(courseId);

  await sendEmail(user.dataValues, course.dataValues);
  return result.dataValues;
}

const sendEmail = async (user, course) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secure: false,
    auth: {
      user: 'drinka@students.softuni.bg',
      pass: 'Studycoding1'
    }
  });

  let info = await transporter.sendMail({
    from: `"STEM Swift Academy" <drinka@students.softuni.bg>`,
    to: user.email,
    subject: 'Course Registration',
    text: `Hi ${user.name}!\nYou have successfully been registered for the ${course.duration} ${course.duration === 1 ? 'Month' : 'Months'} course! You can track your lectures in your calendar on the STEM Swift Academy app.\n\nYou can enter the lectures using the following link: ${course.lectures_link}\n\n\nThank you for choosing STEM Swift Academy!`
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
module.exports = { getAll, getOne, registerUser };