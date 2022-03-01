const db = require('../config/database');
const nodemailer = require('nodemailer');

const getAll = async (userId) => {
  if (!userId) {
    const data = await db.query('SELECT * FROM courses');
    return data.rows;
  }

  const courseIds = await db.query('SELECT course_id FROM users_courses WHERE user_id = $1', [userId]);
  return courseIds.rows.map(c => c.course_id);
}

const getOne = async (courseId) => {
  const course = await db.query('SELECT * FROM courses WHERE id = $1', [courseId]);
  const lectures = await db.query('SELECT * FROM topics WHERE course_id = $1', [courseId]);
  const result = { course: course.rows[0], lectures: lectures.rows };
  return result;
}

const registerUser = async (courseId, userId) => {
  await db.query('INSERT INTO users_courses (user_id, course_id) VALUES ($1, $2)', [userId, courseId]);
  // const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
  // const course = await db.query('SELECT * FROM courses WHERE id = $1', [courseId]);

  // await sendEmail(user.rows[0], course.rows[0]);
  return { status: 'success' };
}

const sendEmail = async (user, course) => {
  let transporter = nodemailer.createTransport({
    service: 'hotmail',
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